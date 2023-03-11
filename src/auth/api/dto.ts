import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserApiDto {
  @Length(5, 15)
  @IsString()
  username: string;

  @Length(5, 30)
  @IsEmail()
  email: string;

  @Length(8, 15)
  @IsString()
  password: string;
}

export class UserLoginRequestApiDto {
  @Length(5, 40)
  @IsEmail()
  email: string;

  @Length(8, 15)
  @IsString()
  password: string;
}

export class RegisterUserApiResponseDto {
  username: string;

  email: string;
}

export class UserLoginApiResponseDto {
  username: string;

  email: string;

  token: string;
}
