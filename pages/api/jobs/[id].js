import prisma from '../../../prisma.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const job = await prisma.job.delete({
        where: { id: id },
      });
      res.status(200).json(job);
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ message: 'Failed to delete job' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}