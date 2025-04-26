/* pages/api/users/addWorker.js */
// ** Requires Prisma setup (`npm install @prisma/client`, `npx prisma init`, schema, migrate) **
// ** Requires password hashing setup (`npm install bcrypt`) **

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, password /*, other fields like skills */ } = req.body;

    // --- Input Validation ---
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields: name, email, password' });
    }
     // Add more robust validation

    // --- Check if user already exists ---
    const existingWorker = await prisma.worker.findUnique({
        where: { email },
    });
    if (existingWorker) {
        return res.status(409).json({ message: 'Worker with this email already exists' });
    }

    // --- Password Hashing (CRUCIAL STEP) ---
     // ** UNCOMMENT and implement when bcrypt is installed **
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    // --- Create Worker in Database ---
    const newWorker = await prisma.worker.create({
      data: {
        name,
        email,
        password: hashedPassword,
        // skills: skills || [], // Example optional field
        // ... other fields
      },
    });

    // --- Respond ---
    const { password: _, ...workerData } = newWorker;
    res.status(201).json({ message: 'Worker added successfully!', worker: workerData });

  } catch (error) {
    console.error("Error adding worker:", error);
    res.status(500).json({ message: 'Internal Server Error creating worker', error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}