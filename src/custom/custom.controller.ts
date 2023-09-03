import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomService } from './custom.service';
import { CreateCustomDto } from './dto/create-custom.dto';
import { UpdateCustomDto } from './dto/update-custom.dto';
import { GenerateProfitLossDto } from './dto/generate-profit-loss.dto';
import { GenerateBalanceSheetDto } from './dto/generate-balance-sheet.dto';

@Controller('custom')
export class CustomController {
  constructor(private readonly customService: CustomService) {}

  @Post('profitandloss')
  profitAndLoss(@Body() generateProfitLossDto: GenerateProfitLossDto) {
    return this.customService.generateProfileAndLoss(generateProfitLossDto)
  }

  @Post('balancesheet')
  balanceSheet(@Body() generateBalanceSheetDto: GenerateBalanceSheetDto) {
    return this.customService.generateBalanceSheet(generateBalanceSheetDto)
  }
}
