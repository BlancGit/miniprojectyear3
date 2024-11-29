// import type { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const prisma = new PrismaClient();

// const registerSchema = z.object({
//   username: z.string().min(3, "Username must be at least 3 characters long"),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters long"),
//   role: z.enum(['Employer', 'Adventurer']),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const data = registerSchema.parse(req.body);
//       const { username, email, password, role } = data;

//       const existingUser = await prisma.user.findUnique({ where: { email } });
//       if (existingUser) {
//         return res.status(400).json({ error: 'User already exists' });
//       }

//       const roleRecord = await prisma.role.findUnique({ where: { name: role } });
//       if (!roleRecord) {
//         return res.status(400).json({ error: 'Invalid role' });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const user = await prisma.user.create({
//         data: {
//           username,
//           email,
//           password: hashedPassword,
//           role: {
//             connect: { id: roleRecord.id },
//           },
//         },
//       });

//       res.status(201).json({ user });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return res.status(400).json({ error: error.errors });
//       }
//       res.status(500).json({ error: 'Something went wrong' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
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
    } else if (error.code === 'P2002') {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Something went wrong, please try again later.' }, { status: 500 });
  }
}
