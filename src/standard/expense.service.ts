import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(private userService: UserService, private prismaService: PrismaService) {}
  
  async create(createExpenseDto: CreateExpenseDto) {
    const user = await this.userService.findOne(createExpenseDto.userId)
    if(!user) throw new ForbiddenException('User Not Found')

    return await this.createExpense(createExpenseDto);
  }

  async findAll() {
    return await this.getAllExpenses();
  }

  async findOne(id: string) {
    return await this.getOneExpense(id);
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return await this.updateReceipt(id, updateExpenseDto);
  }

  async remove(id: string) {
    return await this.deleteExpense(id);
  }

  private async createExpense(createExpenseDto: CreateExpenseDto) {
    return await this.prismaService.expense.create({
      data: {
  ...createExpenseDto
},
select: {
  id: true
}
    })
  }

  private async getAllExpenses() {
    return await this.prismaService.expense.findMany({
      select: {
        id: true,
        userId: true,
  payee: true,
  payment_account: true,
  payment_date: true,
  payment_method: true,
  ref_no: true,
  amount: true,
  memo: true,
  products: true
    }})
  }

    private async getOneExpense(id: string) {
    return await this.prismaService.expense.findFirst({
      where: {
        id: id
      },
     select: {
        id: true,
        userId: true,
  payee: true,
  payment_account: true,
  payment_date: true,
  payment_method: true,
  ref_no: true,
  amount: true,
  memo: true,
  products: true
    }})
  }

      private async deleteExpense(id: string) {
    return await this.prismaService.expense.delete({
      where: {
        id: id
      },
      select: {
        id: true
    }})
  }

  private async updateReceipt(id: string, updateExpenseDto: UpdateExpenseDto) {
    return await this.prismaService.expense.update({
      where: {
        id: id
      },
      data: {
       ...updateExpenseDto
    }, select: {
        id: true
    }})
  }
}
