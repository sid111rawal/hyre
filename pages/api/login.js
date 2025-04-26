import { PrismaClient } from '@prisma/client'
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username: email, password } = req.body;
    
    try {
      // Find user by username or email
      const worker = await prisma.worker.findFirst({
        where: { OR: [{ username }, { email: username }] },
      });
      const employer = await prisma.employer.findFirst({
        where: { OR: [{ username }, { email: username }] },
      });
      
      let user = null;
      
      
      let role = null;
      if(worker) {
        user = worker
        role = "WORKER"
      }else if(employer) {user = employer; role = "EMPLOYER"}

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create a new session
      const sessionId = Math.random().toString(36).substring(2, 15)
      await prisma.session.create({
        data: {
          id: sessionId,
          userId: parseInt(user.id)
        }
      })

      const cookie = serialize('sessionId', sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })

      res.setHeader('Set-Cookie', cookie)

      res.status(200).json({
        message: 'Login successful',
        role: role,
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}