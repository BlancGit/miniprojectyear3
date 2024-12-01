import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { jobId } = req.query;

      if (jobId) {
        // Fetch a single job based on jobId
        const job = await prisma.job.findUnique({
          where: {
            id: parseInt(jobId as string),
          },
        });
        if (job) {
          res.status(200).json(job);
        } else {
          res.status(404).json({ error: 'Job not found.' });
        }
      } else {
        // Fetch all jobs
        const jobs = await prisma.job.findMany();
        res.status(200).json(jobs);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch jobs.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
