import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  bookId: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  date: string;
}
