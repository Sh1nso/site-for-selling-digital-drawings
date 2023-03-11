import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { AuctionModule } from './auction/auction.module';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { BidModule } from './bid/bid.module';
import { MulterModule } from '@nestjs/platform-express';
import { LoggerMiddleware } from './middlewares/middleware.logger';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    MulterModule.register({ dest: './upload' }),
    ConfigModule,
    UserModule,
    AuctionModule,
    CommentModule,
    CategoryModule,
    AuthModule,
    TokenModule,
    BidModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
