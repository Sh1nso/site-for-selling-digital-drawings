import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './api/auth.controller';
import { TokenModule } from 'src/token/token.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule, TokenModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
