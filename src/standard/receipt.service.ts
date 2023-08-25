import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReceiptDto } from './dto/create-receipt.dtos';
import { UpdateReceiptDto } from './dto/update-receipt.dtos';

@Injectable()
export class ReceiptService {
  constructor(private userService: UserService, private prismaService: PrismaService) {}
  
  async create(createReceiptDto: CreateReceiptDto) {
    return await this.createReceipt(createReceiptDto);
  }

  async findAll() {
    return await this.getAllReceipts();
  }

  async findOne(id: string) {
    return await this.getOneReceipt(id);
  }

  async update(id: string, updateReceiptDto: UpdateReceiptDto) {
    return await this.updateReceipt(id, updateReceiptDto);
  }

  async remove(id: string) {
    return await this.deleteInvoice(id);
  }

  private async createReceipt(createReceiptDto: CreateReceiptDto) {
    return await this.prismaService.receipt.create({
      data: {
  ...createReceiptDto
},
select: {
  id: true
}
    })
  }

  private async getAllReceipts() {
    return await this.prismaService.receipt.findMany({
      select: {
        id: true,
  customer_name: true,
  customer_email: true,
  receipt_date: true,
  deposit_to: true,
  payment_method: true,
  amount: true,
  products: true
    }})
  }

    private async getOneReceipt(id: string) {
    return await this.prismaService.receipt.findFirst({
      where: {
        id: id
      },
     select: {
        id: true,
  customer_name: true,
  customer_email: true,
  receipt_date: true,
  deposit_to: true,
  payment_method: true,
  amount: true,
  products: true
    }})
  }


      private async deleteInvoice(id: string) {
    return await this.prismaService.receipt.delete({
      where: {
        id: id
      },
      select: {
        id: true
    }})
  }

  private async updateReceipt(id: string, updateReceiptDto: UpdateReceiptDto) {
    return await this.prismaService.receipt.update({
      where: {
        id: id
      },
      data: {
       ...updateReceiptDto
    }, select: {
        id: true
    }})
  }
}
