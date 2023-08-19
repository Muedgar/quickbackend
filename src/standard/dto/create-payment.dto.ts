import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  userId

  @IsString()
  @IsNotEmpty()
  customer_name

  @IsString()
  @IsNotEmpty()
  customer_email 

  @IsString()
  @IsNotEmpty()
  invoice_no

  @IsString()
  @IsNotEmpty()
  payment_date

  @IsString()
  @IsNotEmpty()
  reference_no 

  @IsString()
  @IsNotEmpty()
  deposit_to   
  
  @IsInt()
  @IsNotEmpty()
  amount_received  
  
  @IsString()
  @IsNotEmpty()
  memo

}
