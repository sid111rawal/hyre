/* pages/api/users/addEmployer.js */
// ** Requires Prisma setup (`npm install @prisma/client`, `npx prisma init`, schema, migrate) **
// ** Requires password hashing setup (`npm install bcrypt`) **

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Import bcrypt

const prisma = new PrismaClient();
const saltRounds = 10; // For bcrypt

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, password /*, other fields like companyName */ } = req.body;

    // --- Input Validation ---
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields: name, email, password' });
    }
    // Add more robust validation (email format, password strength etc.)

    // --- Check if user already exists ---
    const existingEmployer = await prisma.employer.findUnique({
      where: { email },
    });
    if (existingEmployer) {
      return res.status(409).json({ message: 'Employer with this email already exists' });
    }

    // --- Password Hashing (CRUCIAL STEP) ---
    // ** UNCOMMENT and implement when bcrypt is installed **
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // --- Create Employer in Database ---
    const newEmployer = await prisma.employer.create({
      data: {
        name,
        email,
        password: hashedPassword, // Store the hashed password
        // companyName: companyName || null, // Example optional field
        // ... other fields
      },
    });

    // --- Respond ---
    // Don't send the password back, even the hash
    const { password: _, ...employerData } = newEmployer;
    res.status(201).json({ message: 'Employer added successfully!', employer: employerData });

  } catch (error) {
    console.error("Error adding employer:", error);
    // Check for specific Prisma errors if needed
    res.status(500).json({ message: 'Internal Server Error creating employer', error: error.message });
  } finally {
    await prisma.$disconnect(); // Ensure disconnection
  }
}