import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from './auction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'category_id',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  age_rating: number;

  @ManyToOne(() => Auction, (auction) => auction.categories, {
    onDelete: 'SET NULL',
  })
  auction: Auction;
}
