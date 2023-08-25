/*
  Warnings:

  - You are about to drop the column `billing_address` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `receipt_no` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `ref_no` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Receipt` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_userId_fkey";

-- DropIndex
DROP INDEX "Receipt_receipt_no_key";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "billing_address",
DROP COLUMN "receipt_no",
DROP COLUMN "ref_no",
DROP COLUMN "userId";
