import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { StandardModule } from './standard/standard.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ConfigModule, StandardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
