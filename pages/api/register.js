import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, username, password, role } = req.body;
    if (!name || !email || !username || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          username,
          password: hashedPassword,
          role,
          approved: false,
        },
      });

      /*if (role === "Employer") {
        await prisma.employer.create({
          data: {
            user: { connect: { id: user.id } },
            approved: false,
          },
        });
      } else if (role === "Worker") {
        await prisma.worker.create({
          data: {
            user: { connect: { id: user.id } },
            approved: false,
          },
        });
      } else {*/
      
      res.status(201).json({ message: "User created" });
      

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}