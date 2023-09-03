import { Injectable } from '@nestjs/common';
import { GenerateProfitLossDto } from './dto/generate-profit-loss.dto';
import { GenerateBalanceSheetDto } from './dto/generate-balance-sheet.dto';
import { PaymentService } from 'src/standard/payment.service';
import { ExpenseService } from 'src/standard/expense.service';

@Injectable()
export class CustomService {

  constructor(private paymentService: PaymentService, private expenseService: ExpenseService) {}

  async generateProfileAndLoss(generateProfitLossDto: GenerateProfitLossDto) {
    // what I already have
    // payments
    // expenses
    // 
    let profitAndLossStatement = { // use random numbers depending on input services
      payments: [], // payments from db range
      totalRevenue: 0, // sum payments
      costOfSales: 0, // needs recording or random generation
      grossProfit: 0, // totalRevenue - costOfSales
      operationalExpensesOrOverhead: [], // expenses from db range
      operatingExpenses: 0,
      operatingIncome: 0, // grossProfit - operating expenses
      otherIncome: [], //  random generation
      otherExpenses: [],// random generation
      netIncome: '' // operatingIncome - otherExpenses - taxes -  Interest on Debt + otherIncome
    }


    // get payment
    profitAndLossStatement.payments = await this.getPayments(generateProfitLossDto)
    
    // get expense
    profitAndLossStatement.operationalExpensesOrOverhead = await this.getOverhead(generateProfitLossDto)
    

    // get total revenues
    profitAndLossStatement.totalRevenue = await this.totalPayments(profitAndLossStatement.payments)

    // cost of sales
    profitAndLossStatement.costOfSales = Math.floor(profitAndLossStatement.totalRevenue/15)
    
    // grossProfit
    profitAndLossStatement.grossProfit = profitAndLossStatement.totalRevenue - profitAndLossStatement.costOfSales
    
    //
    profitAndLossStatement.operatingExpenses = await this.totalExpenses(profitAndLossStatement.operationalExpensesOrOverhead)

    // 
    profitAndLossStatement.operatingIncome = profitAndLossStatement.grossProfit - profitAndLossStatement.operatingExpenses
    return profitAndLossStatement
  }

  async generateBalanceSheet(generateBalanceSheetDto: GenerateBalanceSheetDto) {
    
  }

  async totalPayments(payments) {
    let sum = 0
    for(let i=0;i<payments.length;i++) {
      sum += payments[i].amount_received
    }
    return sum
  }
  
  async totalExpenses(expenses) {
    let sum = 0
    for(let i=0;i<expenses.length;i++) {
      sum += expenses[i].amount
    }
    return sum
  }
  
  async getPayments(generateProfitLossDto: GenerateProfitLossDto) {
    let payments = await this.paymentService.findAll()

    let start_date = new Date(`${generateProfitLossDto.start_date}`)
    let end_date = new Date(`${generateProfitLossDto.end_date}`)

    let new_payments = []

    for(let i=0;i<payments.length;i++) {
      let test_payment = new Date(`${payments[i].payment_date}`)
      if(test_payment>=start_date && test_payment<=end_date) {
        new_payments.push(payments[i])
      }
    }
    return new_payments
  }

    async getOverhead(generateProfitLossDto: GenerateProfitLossDto) {
    let expenses = await this.expenseService.findAll()

    let start_date = new Date(`${generateProfitLossDto.start_date}`)
    let end_date = new Date(`${generateProfitLossDto.end_date}`)

    let new_expenses = []

    for(let i=0;i<expenses.length;i++) {
      let test_payment = new Date(`${expenses[i].payment_date}`)
      if(test_payment>=start_date && test_payment<=end_date) {
        new_expenses.push(expenses[i])
      }
    }
    return new_expenses
  }

}
