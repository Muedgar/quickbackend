import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReceiptDto {


  @IsString()
  @IsNotEmpty()
  customer_name

  @IsString()
  @IsNotEmpty()
  customer_email 


  @IsString()
  @IsNotEmpty()
  receipt_date


  @IsString()
  @IsNotEmpty()
  deposit_to   
  
  @IsString()
  @IsNotEmpty()
  payment_method  
  
 

  @IsInt()
  @IsNotEmpty()
  amount 

  @IsArray()
  @IsNotEmpty()
  products: string[]

}
