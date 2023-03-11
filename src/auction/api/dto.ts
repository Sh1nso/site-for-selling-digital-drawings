import { AuctionDuration } from 'src/entities/auction.entity';

export class CreateAuctionApiDto {
  title: string;

  subtitle?: string;

  duration: AuctionDuration;
}
