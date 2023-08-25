import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private userService: UserService, private prismaService: PrismaService) {}
  
  async create(createPaymentDto: CreatePaymentDto) {
    
    const invoice = await this.getOneByInvoiceNo(createPaymentDto.invoice_no)
    if(!invoice) throw new ForbiddenException('Invoice record not found.')
    
    return await this.createPayment(createPaymentDto);
  }

  async findAll() {
    return await this.getAllPayments();
  }

  async findOne(id: string) {
    return await this.getOnePayment(id);
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return await this.updatePayment(id, updatePaymentDto);
  }

  async remove(id: string) {
    return await this.deleteInvoice(id);
  }

  private async createPayment(createPaymentDto: CreatePaymentDto) {
    return await this.prismaService.payment.create({
      data: {
  ...createPaymentDto
},
select: {
  id: true
}
    })
  }

  private async getAllPayments() {
    return await this.prismaService.payment.findMany({
      select: {
        id: true,
  customer_name: true,
  customer_email: true,
  invoice_no: true,
  payment_date: true,
  deposit_to: true,
  amount_received: true,
  memo: true
    }})
  }

    private async getOnePayment(id: string) {
    return await this.prismaService.payment.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
  customer_name: true,
  customer_email: true,
  invoice_no: true,
  payment_date: true,
  deposit_to: true,
  amount_received: true,
  memo: true
    }})
  }

      private async getOneByInvoiceNo(invoice_no: string) {
    return await this.prismaService.invoice.findFirst({
      where: {
        invoice_no: invoice_no
      },
      select: {
        id: true,
        // userId: true,
  customer_name: true,
  customer_email: true,
  billing_address: true,
  terms: true,
  invoice_date: true,
  due_date: true,
  invoice_no: true,
  products: true,
  message_on_invoice: true,
  amount: true
    }})
  }

      private async deleteInvoice(id: string) {
    return await this.prismaService.payment.delete({
      where: {
        id: id
      },
      select: {
        id: true
    }})
  }

  private async updatePayment(id: string, updatePaymentDto: UpdatePaymentDto) {
    return await this.prismaService.payment.update({
      where: {
        id: id
      },
      data: {
       ...updatePaymentDto
    }, select: {
        id: true
    }})
  }
}
