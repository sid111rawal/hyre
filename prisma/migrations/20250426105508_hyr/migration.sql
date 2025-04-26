/*
  Warnings:

  - You are about to drop the `Employer` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'WORKER',
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "username" DROP DEFAULT;

-- DropTable
DROP TABLE "Employer";
