import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from './auction.entity';
import { User } from './user.entity';

@Entity()
export class ContentComment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'comment_id',
  })
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: 'SET NULL',
  })
  owner: User;

  @ManyToOne(() => Auction, (auction) => auction.comments, {
    onDelete: 'SET NULL',
  })
  auction: Auction;
}
