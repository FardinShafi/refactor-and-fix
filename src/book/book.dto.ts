import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

export class UpdateBookDto extends CreateBookDto {}
