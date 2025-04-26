import { PrismaClient } from '@prisma/client';
import { serialize } from 'cookie';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sessionId } = req.cookies;

    if (!sessionId) {
      return res.status(200).json({ message: 'Already logged out' });
    }

    try {
      await prisma.session.delete({ where: { id: sessionId } });

      const cookie = serialize('sessionId', '', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 0,
        path: '/',
      });

      res.setHeader('Set-Cookie', cookie);

      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}