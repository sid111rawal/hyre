import { PrismaClient } from '@prisma/client';
import withMiddleware from '../middleware';

const prisma = new PrismaClient();

export default withMiddleware(async function handler(req, res) {
  const { id } = req.query;
  const { user } = req;
  if (req.method === 'DELETE') {
    try {
      const job = await prisma.job.findUnique({
        where: { id: id },
      });

      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }

      if (job.employerId !== user.id) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      await prisma.job.delete({
        where: { id: id }
      });
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
});