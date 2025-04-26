/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Employer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'CUSTOMER_SERVICE', 'EMPLOYER', 'WORKER');

-- DropIndex
DROP INDEX "Employer_email_key";

-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'EMPLOYER',
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'WORKER',
ALTER COLUMN "name" DROP NOT NULL;

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_username_key" ON "Employer"("username");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userWorkerId_fkey" FOREIGN KEY ("userId") REFERENCES "Worker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userEmployerId_fkey" FOREIGN KEY ("userId") REFERENCES "Employer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
