import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id/books')
  getUserBooks(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getBooks(userId);
  }

  @Get('/:id/sales')
  getUserSales(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getSales(userId);
  }
}
