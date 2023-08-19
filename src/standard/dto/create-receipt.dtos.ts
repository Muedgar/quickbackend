import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReceiptDto {
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
  billing_address

  @IsString()
  @IsNotEmpty()
  receipt_date

  @IsString()
  @IsNotEmpty()
  receipt_no 

  @IsString()
  @IsNotEmpty()
  deposit_to   
  
  @IsString()
  @IsNotEmpty()
  payment_method  
  
  @IsString()
  @IsNotEmpty()
  ref_no

  @IsInt()
  @IsNotEmpty()
  amount 

  @IsArray()
  @IsNotEmpty()
  products: string[]

}
