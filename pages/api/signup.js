import prisma from '../../prisma.js';
import bcrypt from 'bcrypt'; 

export default async function handler(req, res) {
    const adminEmail = 'admin@admin.com';
    const adminPasswordPlain = 'password';

    try {
        const adminUser = await prisma.user.findUnique({ where: { email: adminEmail } });
        const adminPasswordHashed = await bcrypt.hash(adminPasswordPlain, 10);

        if (adminUser) {
            // Admin user exists, update their password
            await prisma.user.update({
                where: { email: adminEmail },
                data: {
                    password: adminPasswordHashed,
                    isAdmin: true, // Ensure isAdmin is true
                },
            });
            console.log("Admin user password updated.");
        } else {
            // Admin user does not exist, create it
            await prisma.user.create({
                data: {
                    email: adminEmail,
                    password: adminPasswordHashed,
                    isAdmin: true,
                },
            });
            console.log("Admin user created.");
        }

    } catch (e) {
        console.error("Error ensuring admin user exists:", e);
    }


    if (req.method === 'POST') {
        const { email, password, name } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name: name || null,
                },
            });
            return res.status(201).json({ message: 'User created successfully.', user: newUser });
        } catch (error) {
            console.error('Error creating user:', error);
            return res.status(500).json({ message: 'Failed to create user.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method not allowed.' });
    }
}