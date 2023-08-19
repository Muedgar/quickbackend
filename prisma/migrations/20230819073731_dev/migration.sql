/*
  Warnings:

  - A unique constraint covering the columns `[invoice_no]` on the table `Invoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receipt_no]` on the table `Receipt` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoice_no_key" ON "Invoice"("invoice_no");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_receipt_no_key" ON "Receipt"("receipt_no");
