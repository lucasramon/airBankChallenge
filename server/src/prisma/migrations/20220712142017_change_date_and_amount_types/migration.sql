/*
  Warnings:

  - The `date` column on the `transaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `amount` on the `transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
