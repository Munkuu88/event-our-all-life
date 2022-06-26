import { isNumber, IsNumber, IsString } from 'class-validator';

export class CreateGarageDto {
  @IsString()
  type: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  district: string;

  @IsString()
  location: string;

  @IsNumber()
  size: number;

  @IsNumber()
  total: number;

  @IsNumber()
  time: number;

  @IsNumber()
  payment: number;
}
