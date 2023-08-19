import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StandardService } from './standard.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { CreateReceiptDto } from './dto/create-receipt.dtos';
import { ReceiptService } from './receipt.service';
import { UpdateReceiptDto } from './dto/update-receipt.dtos';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('standard')
export class StandardController {
  constructor(private readonly standardService: StandardService, 
    private readonly paymentService: PaymentService,
    private readonly receiptService: ReceiptService,
    private readonly expenseService: ExpenseService) {}

  @Post('invoice')
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.standardService.create(createInvoiceDto);
  }

  @Get('invoice')
  findAll() {
    return this.standardService.findAll();
  }

  @Get('invoice/:id')
  findOne(@Param('id') id: string) {
    return this.standardService.findOne(id);
  }

  @Patch('invoice/:id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.standardService.update(id, updateInvoiceDto);
  }

  @Delete('invoice/:id')
  remove(@Param('id') id: string) {
    return this.standardService.remove(id);
  }





  //  payment

  @Post('payment')
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get('payment')
  findAllPayment() {
    return this.paymentService.findAll();
  }

  @Get('payment/:id')
  findOnePayment(@Param('id') id: string) {
    return this.paymentService.findOne(id);
  }

  @Patch('payment/:id')
  updatePayment(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Delete('payment/:id')
  removePayment(@Param('id') id: string) {
    return this.paymentService.remove(id);
  }


  // receipt

    @Post('receipt')
  createReceipt(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptService.create(createReceiptDto);
  }

  @Get('receipt')
  findAllReceipt() {
    return this.receiptService.findAll();
  }

  @Get('receipt/:id')
  findOneReceipt(@Param('id') id: string) {
    return this.receiptService.findOne(id);
  }

  @Patch('receipt/:id')
  updateReceipt(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receiptService.update(id, updateReceiptDto);
  }

  @Delete('receipt/:id')
  removeReceipt(@Param('id') id: string) {
    return this.receiptService.remove(id);
  }


  // expense

      @Post('expense')
  createExpense(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expenseService.create(createExpenseDto);
  }

  @Get('expense')
  findAllExpense() {
    return this.expenseService.findAll();
  }

  @Get('expense/:id')
  findOneExpense(@Param('id') id: string) {
    return this.expenseService.findOne(id);
  }

  @Patch('expense/:id')
  updateExpense(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
    return this.expenseService.update(id, updateExpenseDto);
  }

  @Delete('expense/:id')
  removeExpense(@Param('id') id: string) {
    return this.expenseService.remove(id);
  }

}
