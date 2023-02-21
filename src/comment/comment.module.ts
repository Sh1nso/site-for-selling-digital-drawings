import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentComment } from 'src/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContentComment])],
})
export class CommentModule {}
