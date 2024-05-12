import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [PrismaModule, AuthModule, BookModule, UserModule, SaleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
