import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly dbService: PrismaService) {}

  async getBooks() {
    return await this.dbService.book.findMany({
      include: {
        user: true,
      },
    });
  }

  async getBook(id: string) {
    return await this.dbService.book.findUniqueOrThrow({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async createBook(data: Prisma.BookCreateWithoutUserInput, userId: number) {
    return await this.dbService.book.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
      },
    });
  }

  async updateBook(id: string, data: Prisma.BookUpdateInput) {
    return await this.dbService.book.update({ where: { id }, data });
  }

  async deleteBook(id: string) {
    return await this.dbService.book.delete({ where: { id } });
  }
}
