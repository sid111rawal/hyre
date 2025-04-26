import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, role, username } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 8 characters long' });
    }
    if (!['WORKER', 'EMPLOYER'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    try {
      // Check if the email already exists
      const existingUser = await prisma.worker.findUnique({ where: { email } });
      const existingUsername = await prisma.worker.findUnique({
        where: { username },
      });
      if (existingUsername) {
        return res.status(400).json({ message: 'Username already exists' });
      }
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const existingEmployer = await prisma.employer.findUnique({where : {email}})
      if (existingEmployer){
        return res.status(400).json({ message: 'Email already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create the user in the database
      if (role == 'WORKER') {
        await prisma.worker.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role,
            username,
          },
        });
      } else if (role == 'EMPLOYER') {
        await prisma.employer.create({
          data: {
            name,
            email,
            password: hashedPassword,
            role,
            username,
          },
        });
      }

      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.log(error);
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}