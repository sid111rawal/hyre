import prisma from '../../../prisma.js';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, password, skills } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const worker = await prisma.worker.create({
        data: {
          email,
          name,
          password: hashedPassword,
          skills,
        },
      });

      res.status(201).json(worker);
    } catch (error) {
      console.error('Error creating worker:', error);
      if (error.code === 'P2002') {
        return res.status(409).json({ error: 'Email already exists' });
      }
      res.status(500).json({ error: 'Failed to create worker' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}