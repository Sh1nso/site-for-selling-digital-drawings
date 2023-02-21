import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { ContentComment } from './comment.entity';
import { User } from './user.entity';

enum AuctionDuration {
  oneDay = 86400,
  threeDays = 259200,
  oneWeek = 604800,
}

@Entity()
export class Auction {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'auction_id',
  })
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  image: string;

  @Column({
    name: 'rating',
  })
  popularityRating: number;

  @Column()
  like: number;

  @Column({
    type: 'enum',
    enum: AuctionDuration,
    default: AuctionDuration.oneDay,
  })
  duration: AuctionDuration;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.auctions, {
    onDelete: 'SET NULL',
  })
  owner: User;

  @OneToMany(() => Category, (category) => category.auction, {
    onDelete: 'CASCADE',
  })
  categories: Category[];

  @OneToMany(() => ContentComment, (comment) => comment.auction, {
    onDelete: 'CASCADE',
  })
  comments: ContentComment[];
}
