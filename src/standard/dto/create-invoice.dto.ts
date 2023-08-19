import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateInvoiceDto {
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
  terms

  @IsString()
  @IsNotEmpty()
  invoice_date 

  @IsString()
  @IsNotEmpty()
  due_date   
  
  @IsString()
  @IsNotEmpty()
  invoice_no  
  
  @IsArray()
  @IsNotEmpty()
  products: string[]

  @IsString()
  @IsNotEmpty()
  message_on_invoice

  @IsInt()
  @IsNotEmpty()
  amount

}
