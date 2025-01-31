import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSaleDto {
  @ApiProperty()
  @IsNotEmpty()
  bookId: string;
}
