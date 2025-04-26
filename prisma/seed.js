const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: 'admin@admin.com' },
    });

    if (existingAdmin) {
      console.log('Admin user already exists, deleting...');
      await prisma.user.delete({
        where:{
          email: 'admin@admin.com'
        }
      })
    }

    const hashedPassword = await bcrypt.hash('password', 10);

    const adminUser = await prisma.user.create({
      data: {
        username: 'test',
        email: 'admin@admin.com',
        password:hashedPassword,
        name: 'Test',
        role: 'ADMIN',        
        approved: true,
        isAdmin: true,
        updatedAt: new Date(),
      },
    });

    console.log('Admin user created:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();