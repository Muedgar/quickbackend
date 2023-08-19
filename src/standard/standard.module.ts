import { Module } from '@nestjs/common';
import { StandardService } from './standard.service';
import { StandardController } from './standard.controller';
import { UserService } from 'src/user/user.service';
import { PaymentService } from './payment.service';
import { ReceiptService } from './receipt.service';
import { ExpenseService } from './expense.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [StandardController],
  providers: [StandardService, UserService, PaymentService, ReceiptService, ExpenseService]
})
export class StandardModule {}
