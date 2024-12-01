import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/db'; // Assuming prisma client is set up correctly

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { jobId } = req.query;

  if (typeof jobId !== 'string') {
    return res.status(400).json({ error: 'Invalid job ID' });
  }

  if (req.method === 'GET') {
    try {
      const job = await prisma.job.findUnique({
        where: { id: parseInt(jobId, 10) },
      });
      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      return res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch job details' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
