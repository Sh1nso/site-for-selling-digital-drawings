import { ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async getOne(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (user) {
      return user;
    }
    throw new ForbiddenException();
  }
}
