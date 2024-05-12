import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookOwnerGuard implements CanActivate {
  constructor(private readonly dbService: PrismaService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const bookId = request.params.id;
    const userId = request.headers['x-auth-userid'] as number;

    const book = await this.dbService.book.findUnique({
      where: { id: bookId },
      select: { userId: true },
    });

    return book.userId === userId;
  }
}
