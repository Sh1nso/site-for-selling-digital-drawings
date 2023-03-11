import { Injectable } from '@nestjs/common';
import { AuctionRepository } from '../auction.repository';
import { AuctionCreateDto } from './dto';

@Injectable()
export class AuctionService {
  constructor(private readonly auctionRepository: AuctionRepository) {}

  async createAuction(dto: AuctionCreateDto) {
    const newAuction = this.auctionRepository.save({
      title: dto.title,
      userId: dto.userId,
      image: dto.image,
      duration: dto.duration,
      subtitle: dto.subtitle,
    });

    return newAuction;
  }
}
