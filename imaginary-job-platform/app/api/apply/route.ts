// import { NextResponse } from 'next/server';
// import prisma from '@/utils/db'; // Ensure this is the correct path to your Prisma setup

// export async function POST(request: Request) {
//   try {
//     // Parse the JSON body from the request
//     const body = await request.json();
//     const { jobId, userId, applicantName, applicantEmail, coverLetter } = body;

//     // Validate that all required fields are present
//     if (!jobId || !userId || !applicantName || !applicantEmail || !coverLetter) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     // Create a new application in the database
//     const application = await prisma.application.create({
//       data: {
//         jobId: parseInt(jobId), // Ensure jobId is of type integer
//         userId: parseInt(userId), // Ensure userId is of type integer
//         applicantName,
//         applicantEmail,
//         coverLetter,
//       },
//     });

//     // Send the created application as the response
//     return NextResponse.json({ success: true, data: application }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting application:', error);
//     return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import prisma from '@/utils/db'; // Ensure this is the correct path to your Prisma setup

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const { jobId, userId, applicantName, applicantEmail, coverLetter } = body;

    // Validate that all required fields are present
    if (!jobId || !userId || !applicantName || !applicantEmail || !coverLetter) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a new application in the database
    const application = await prisma.application.create({
      data: {
        jobId: parseInt(jobId), // Ensure jobId is of type integer
        userId: parseInt(userId), // Ensure userId is of type integer
        applicantName,
        applicantEmail,
        coverLetter,
      },
    });

    // Send the created application as the response
    return NextResponse.json({ success: true, data: application }, { status: 201 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
