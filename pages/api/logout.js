import { signOut } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await signOut({ req })
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}