import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private readonly dbService: PrismaService) {}

  async getSalesByUserId(userId: number) {
    return this.dbService.sale.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
  }

  async getSalesByBookId(bookId: string) {
    return this.dbService.sale.findMany({
      where: { bookId },
      include: {
        book: true,
      },
    });
  }

  async createSale(bookId: string, userId: number) {
    const book = await this.dbService.book.findUnique({
      where: { id: bookId },
      select: {
        price: true,
      },
    });
    return this.dbService.sale.create({
      data: {
        bookId,
        userId,
        price: book.price,
        date: new Date().toISOString().split('T')[0],
      },
    });
  }
}
