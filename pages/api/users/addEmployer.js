import prisma from '../../../prisma.js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, username, password, companyName } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const employer = await prisma.employer.create({
        data: {
          email,
          name,
          username,
          password: hashedPassword,
          companyName,
        },
      });

      res.status(201).json(employer);
    } catch (error) {
      console.error('Error creating employer:', error);
      res.status(500).json({ error: 'Failed to create employer' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}