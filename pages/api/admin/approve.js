import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import NextAuth from "next-auth";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const session = await getServerSession(req, res);
  if (!session || !session.user.isAdmin) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "userId is required" });
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { approved: true },
    });

    res.status(200).json({ message: "User approved" });
  } catch (error) {
    console.error("Error approving user:", error);
    res.status(500).json({ error: "Error approving user.", details: error.message });
  }
}