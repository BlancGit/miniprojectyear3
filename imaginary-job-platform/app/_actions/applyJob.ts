import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Apply for a job
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { jobId, userId, applicantName, applicantEmail, coverLetter } = data;

    const newApplication = await prisma.application.create({
      data: {
        job: {
          connect: { id: jobId },
        },
        user: {
          connect: { id: userId },
        },
        applicantName,
        applicantEmail,
        coverLetter,
      },
    });

    return NextResponse.json(newApplication, { status: 201 });
  } catch (error) {
    console.error('Error creating application:', error);
    return NextResponse.json({ error: 'Error creating application' }, { status: 500 });
  }
}
