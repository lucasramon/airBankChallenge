-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "amount" SET DATA TYPE TEXT,
ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "date" SET DATA TYPE TEXT;
