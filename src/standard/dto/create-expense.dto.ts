import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateExpenseDto {

  @IsString()
  @IsNotEmpty()
  payee

  @IsString()
  @IsNotEmpty()
  payment_account 

  @IsString()
  @IsNotEmpty()
  payment_date

  @IsString()
  @IsNotEmpty()
  payment_method

  @IsString()
  @IsNotEmpty()
  ref_no 

  @IsInt()
  @IsNotEmpty()
  amount   
  
  @IsString()
  @IsNotEmpty()
  memo  
  
  @IsArray()
  @IsNotEmpty()
  products: string[]
}
