import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { JwtStrategy } from 'src/strategy/jwt-strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepository, JwtStrategy],
  controllers: [UserController],
  exports: [UserRepository],
})
export class UserModule {}
