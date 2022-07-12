/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transaction_accountId_key" ON "transaction"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "transaction_categoryId_key" ON "transaction"("categoryId");
