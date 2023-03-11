import { AuctionDuration } from 'src/entities/auction.entity';

export class AuctionCreateDto {
  title: string;

  subtitle?: string;

  image: string;

  userId: number;

  duration: AuctionDuration;
}
