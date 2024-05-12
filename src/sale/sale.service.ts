import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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

  async createSale(data: Prisma.SaleCreateManyInput) {
    return this.dbService.sale.create({
      data,
    });
  }
}
