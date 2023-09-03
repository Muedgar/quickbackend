import { IsNotEmpty, IsString } from "class-validator";

export class GenerateBalanceSheetDto {

  @IsString()
  @IsNotEmpty()
  start_date

  @IsString()
  @IsNotEmpty()
  end_date
}
