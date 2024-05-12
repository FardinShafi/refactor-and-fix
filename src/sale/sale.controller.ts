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
import { ApiBasicAuth } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

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
  @ApiBasicAuth('x-auth-userid')
  createSale(@Body() data: CreateSaleDto, @CurrentUser() userId: number) {
    return this.saleService.createSale(data.bookId, userId);
  }
}
