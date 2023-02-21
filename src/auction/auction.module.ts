import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from 'src/entities/auction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
})
export class AuctionModule {}
