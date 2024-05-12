import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { BookOwnerGuard } from 'src/auth/guards/book-owner.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { ApiBasicAuth } from '@nestjs/swagger';

@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks() {
    return this.bookService.getBooks();
  }

  @Get('/:id')
  async getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiBasicAuth('x-auth-userid')
  async createBook(@Body() data: CreateBookDto, @CurrentUser() userId: number) {
    return this.bookService.createBook(data, userId);
  }

  @Put('/:id')
  @UseGuards(AuthGuard)
  @UseGuards(BookOwnerGuard)
  @ApiBasicAuth('x-auth-userid')
  async updateBook(@Param('id') id: string, @Body() data: UpdateBookDto) {
    return this.bookService.updateBook(id, data);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  @UseGuards(BookOwnerGuard)
  @ApiBasicAuth('x-auth-userid')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
