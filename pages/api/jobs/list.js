import { PrismaClient } from '@prisma/client';
import withMiddleware from '../middleware';

const prisma = new PrismaClient();

export default withMiddleware(async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const jobs = await prisma.job.findMany();
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
});