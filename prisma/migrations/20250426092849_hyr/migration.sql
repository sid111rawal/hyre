-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false;
