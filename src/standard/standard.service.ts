import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class StandardService {
  constructor(private userService: UserService, private prismaService: PrismaService) {}
  
  async create(createInvoiceDto: CreateInvoiceDto) {
    // const user = await this.userService.findOne(createInvoiceDto.userId)
    // if(!user) throw new ForbiddenException('User Not Found')
    
    const invoice = await this.getOneByInvoiceNo(createInvoiceDto.invoice_no)
    if(invoice) throw new ForbiddenException('Invoice record already exists')
    
    return await this.createInvoice(createInvoiceDto);
  }

  async findAll() {
    return await this.getAllInvoices();
  }

  async findOne(id: string) {
    return await this.getOneInvoice(id);
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    return await this.updateInvoice(id, updateInvoiceDto);
  }

  async remove(id: string) {
    return await this.deleteInvoice(id);
  }

  private async createInvoice(createInvoiceDto: CreateInvoiceDto) {
    return await this.prismaService.invoice.create({
      data: {
  customer_name: createInvoiceDto.customer_name,
  customer_email: createInvoiceDto.customer_email,
  billing_address: createInvoiceDto.billing_address,
  terms: createInvoiceDto.terms,
  invoice_date: createInvoiceDto.invoice_date,
  due_date: createInvoiceDto.due_date,
  invoice_no: createInvoiceDto.invoice_no,
  products: createInvoiceDto.products,
  message_on_invoice: createInvoiceDto.message_on_invoice,
  amount: Number(createInvoiceDto.amount)
},
select: {
  id: true
}
    })
  }

  private async getAllInvoices() {
    return await this.prismaService.invoice.findMany({
      select: {
        id: true,
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

    private async getOneInvoice(id: string) {
    return await this.prismaService.invoice.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
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

      private async getOneByInvoiceNo(invoice_no: string) {
    return await this.prismaService.invoice.findFirst({
      where: {
        invoice_no: invoice_no
      },
      select: {
        id: true,
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
    return await this.prismaService.invoice.delete({
      where: {
        id: id
      },
      select: {
        id: true
    }})
  }

  private async updateInvoice(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    return await this.prismaService.invoice.update({
      where: {
        id: id
      },
      data: {
       ...updateInvoiceDto
    }})
  }
}
