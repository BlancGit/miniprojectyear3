import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const prisma = new PrismaClient();

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(['Employer', 'Adventurer']),
});

// Export a named function to handle POST requests
export async function POST(request: Request) {
  try {
    const body = await request.json(); // Parse the request body
    const data = registerSchema.parse(body);
    const { username, email, password, role } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Ensure the role exists
    let roleRecord = await prisma.role.findUnique({ where: { name: role } });
    if (!roleRecord) {
      console.log("Role does not exist, creating role:", role);
      roleRecord = await prisma.role.create({ data: { name: role } });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user with the hashed password and role relationship
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: {
          connect: { id: roleRecord.id },
        },
      },
    });

    // Return the created user (excluding password)
    return NextResponse.json({ user }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    } else if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as any).code === 'P2002'
    ) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Something went wrong, please try again later.' }, { status: 500 });
  }
}
