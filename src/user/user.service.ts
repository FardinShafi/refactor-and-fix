import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly dbService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.dbService.user.create({ data });
  }

  async getBooks(userId: number) {
    return this.dbService.book.findMany({ where: { userId } });
  }

  async getSales(userId: number) {
    return this.dbService.sale.findMany({ where: { userId } });
  }
}
