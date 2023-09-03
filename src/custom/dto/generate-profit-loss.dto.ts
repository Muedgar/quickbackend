import { IsNotEmpty, IsString } from "class-validator";

export class GenerateProfitLossDto {

  @IsString()
  @IsNotEmpty()
  start_date

  @IsString()
  @IsNotEmpty()
  end_date
}
