// import type { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const prisma = new PrismaClient();

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters long"),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const data = loginSchema.parse(req.body);
//       const { email, password } = data;

//       const user = await prisma.user.findUnique({ where: { email } });

//       if (!user) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return res.status(400).json({ error: 'Invalid email or password' });
//       }

//       res.status(200).json({ user });
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
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import { z } from 'zod';

// const prisma = new PrismaClient();

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters long"),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       console.log("Incoming request body:", req.body);

//       // Validate request body with zod
//       const data = loginSchema.parse(req.body);
//       const { email, password } = data;

//       // Fetch user from the database using Prisma
//       const user = await prisma.user.findUnique({ where: { email } });
//       console.log("User found in database:", user);

//       // If user is not found, return an error
//       if (!user) {
//         console.log("User not found for email:", email);
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }

//       // Compare provided password with hashed password
//       const passwordMatch = await bcrypt.compare(password, user.password);
//       console.log("Password match result:", passwordMatch);

//       // If passwords do not match, return an error
//       if (!passwordMatch) {
//         console.log("Password does not match for email:", email);
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }

//       // Send user data back (excluding password)
//       const { password: _, ...userWithoutPassword } = user;
//       console.log("Login successful for user:", userWithoutPassword);
//       res.status(200).json({ user: userWithoutPassword });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         console.error("Validation error:", error.errors);
//         return res.status(400).json({ error: error.errors });
//       }
//       console.error('Unexpected error:', error);
//       res.status(500).json({ error: 'Something went wrong' });
//     }
//   } else {
//     console.log(`Method ${req.method} not allowed`);
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// }
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const prisma = new PrismaClient();

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Export a named function to handle POST requests
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = loginSchema.parse(body);
    const { email, password } = data;

    console.log("Parsed login data:", data);

    // Find the user in the database by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.log("User not found for email:", email);
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("Password mismatch for user:", email);
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    console.log("Login successful for user:", user);

    const { password: _, ...userWithoutPassword } = user; // Exclude password from response
    return NextResponse.json({ user: userWithoutPassword }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Unexpected error during login:', error);
    return NextResponse.json({ error: 'Something went wrong, please try again later.' }, { status: 500 });
  }
}
