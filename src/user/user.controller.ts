import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth-guard';
import { UserRepository } from './user.repository';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get(':id')
  async getOne(@Param('id') userId: number) {
    return await this.userRepository.getOne(userId);
  }
}
