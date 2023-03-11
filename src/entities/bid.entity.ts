import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from './auction.entity';
import { User } from './user.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'bidId' })
  id: number;

  @Column()
  sumOfMoney: number;

  @ManyToOne(() => User, (user) => user.bids, {
    onDelete: 'SET NULL',
  })
  owner: User;

  @ManyToOne(() => Auction, (auction) => auction.bids, {
    onDelete: 'SET NULL',
  })
  auction: Auction;
}
