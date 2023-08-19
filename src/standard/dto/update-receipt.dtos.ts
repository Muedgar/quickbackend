import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptDto } from './create-receipt.dtos';

export class UpdateReceiptDto extends PartialType(CreateReceiptDto) {}
