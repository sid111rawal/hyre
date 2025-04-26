import prisma from '../../prisma.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, category, pay, time } = req.body;

    try {
      const newJob = await prisma.job.create({
        data: {
          title,
          description,
          category,
          pay: parseFloat(pay),
          time,
          // Assuming you have a way to get the current employer's ID from the session or token
          // For example, if you have a field 'employerId' in your session or token:
          employerId: "clx9q303n000060t5w1r35x16"
        },
      });

      res.status(201).json(newJob);
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ error: 'Failed to create job' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}