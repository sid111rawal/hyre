import { PrismaClient } from '@prisma/client';
import withMiddleware from './middleware';

const prisma = new PrismaClient();

export default withMiddleware(async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, category, pay, time } = req.body;
    const { user } = req;

    try {
      const job = await prisma.job.create({
        data: {
          title,
          description,
          category,
          pay: parseFloat(pay),
          time,
          employerId: user.id,
        },
      });

      res.status(200).json({ message: 'Job created successfully', job });
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
});