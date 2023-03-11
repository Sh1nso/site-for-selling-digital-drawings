import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayLoad } from 'src/common/types/jwt-payload.type';
import { User } from 'src/entities/user.entity';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwtToken(user: User): Promise<string> {
    const payLoad: JwtPayLoad = { user };

    return this.jwtService.sign(payLoad, {
      secret: process.env.SECRET,
      expiresIn: process.env.EXPIRE_JWT,
    });
  }
}
