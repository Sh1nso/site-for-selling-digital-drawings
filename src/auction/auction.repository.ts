import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'src/entities/auction.entity';
import { Repository } from 'typeorm';

export class AuctionRepository extends Repository<Auction> {
  constructor(
    @InjectRepository(Auction)
    private auctionRepository: Repository<Auction>,
  ) {
    super(
      auctionRepository.target,
      auctionRepository.manager,
      auctionRepository.queryRunner,
    );
  }
}
