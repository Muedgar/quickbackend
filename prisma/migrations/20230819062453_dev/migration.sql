-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "billing_address" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "invoice_date" TEXT NOT NULL,
    "due_date" TEXT NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "products" TEXT[],
    "message_on_invoice" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "payment_date" TEXT NOT NULL,
    "reference_no" TEXT NOT NULL,
    "deposit_to" TEXT NOT NULL,
    "amount_received" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT NOT NULL,
    "billing_address" TEXT NOT NULL,
    "receipt_date" TEXT NOT NULL,
    "receipt_no" TEXT NOT NULL,
    "deposit_to" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "ref_no" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "products" TEXT[],

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "payee" TEXT NOT NULL,
    "payment_account" TEXT NOT NULL,
    "payment_date" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "ref_no" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,
    "products" TEXT[],

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
