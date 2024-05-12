import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './sale.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('/sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get('/users/:id')
  getSalesByUser(@Param('id', ParseIntPipe) userId: number) {
    return this.saleService.getSalesByUserId(userId);
  }

  @Get('/books/:id')
  getSalesByBook(@Param('id') bookId: string) {
    return this.saleService.getSalesByBookId(bookId);
  }

  @Post()
  @UseGuards(AuthGuard)
  createSale(@Body() data: CreateSaleDto) {
    return this.saleService.createSale(data);
  }
}
