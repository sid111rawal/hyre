import prisma from '../../../prisma.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const jobs = await prisma.job.findMany();
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ error: 'Failed to load jobs.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}