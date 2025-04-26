import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default function withMiddleware(handler) {
  return async (req, res) => {
    const sessionId = req.cookies ? req.cookies.sessionId : undefined;
    if (!sessionId && !res) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    try {
      const session = await prisma.session.findUnique({
        where: { id: sessionId },
      });

      if (!session) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }

      const worker = await prisma.worker.findUnique({ where: { id: session.userId } });
      const employer = await prisma.employer.findUnique({ where: { id: session.userId } });
      let user = null;
      if (worker) {
        user = worker;
      } else if (employer) {
        user = employer;
      }

      if (!user) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
      req.user = user;
      req.user.role = user.role;

      return handler(req, res);
    } catch (error) {
      console.error('Error in middleware:', error);
      res.status(500).json({ message: 'Database error' });
      return{
          redirect: {
            destination: '/login',
            permanent: false,
          },
      }
    }
  };
}