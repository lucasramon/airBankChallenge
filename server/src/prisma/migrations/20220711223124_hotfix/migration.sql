/*
  Warnings:

  - Added the required column `color` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "color" VARCHAR(500) NOT NULL;
