import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';

import { AuthService } from '../service/auth.service';
import {
  RegisterUserApiDto,
  RegisterUserApiResponseDto,
  UserLoginApiResponseDto,
  UserLoginRequestApiDto,
} from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: RegisterUserApiDto,
  ): Promise<RegisterUserApiResponseDto> {
    return this.authService.registerUser(body);
  }

  @Post('login')
  async login(
    @Body() body: UserLoginRequestApiDto,
  ): Promise<UserLoginApiResponseDto> {
    return this.authService.loginUser(body);
  }
}
