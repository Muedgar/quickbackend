import { Module } from '@nestjs/common';
import { CustomService } from './custom.service';
import { CustomController } from './custom.controller';
import { StandardModule } from 'src/standard/standard.module';

@Module({
  imports: [StandardModule],
  controllers: [CustomController],
  providers: [CustomService]
})
export class CustomModule {}
