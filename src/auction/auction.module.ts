import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from 'src/entities/auction.entity';
import { AuctionService } from './service/auction.service';
import { AuctionController } from './api/auction.controller';
import { AuctionRepository } from './auction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Auction])],
  providers: [AuctionService, AuctionRepository],
  controllers: [AuctionController],
})
export class AuctionModule {}
