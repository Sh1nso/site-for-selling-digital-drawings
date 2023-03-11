import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from './auction.entity';
import { Bid } from './bid.entity';
import { ContentComment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Auction, (auction) => auction.owner, {
    onDelete: 'CASCADE',
  })
  auctions: Auction[];

  @OneToMany(() => ContentComment, (comment) => comment.owner, {
    onDelete: 'CASCADE',
  })
  comments: ContentComment[];

  @OneToMany(() => Bid, (bid) => bid.owner, {
    onDelete: 'CASCADE',
  })
  bids: Bid[];
}
