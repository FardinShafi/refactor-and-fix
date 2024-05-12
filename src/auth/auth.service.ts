import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly dbService: PrismaService) {}
  async loginUser(email: string, password: string) {
    const user = await this.dbService.user.findUnique({
      where: { email, password },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async registerUser(data: Prisma.UserCreateInput) {
    const existingUser = await this.dbService.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) throw new UnauthorizedException('User already exists');

    return await this.dbService.user.create({ data });
  }
}
