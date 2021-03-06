import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from '../services/authentication.services';
import { CreateUserDto } from '../dtos/authentication.dtos';

@Controller('user')
export class userController {
  constructor(private readonly UserService: UserService) {}

  @Post('register')
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    return await this.UserService.createUser(CreateUserDto);
  }

  @Post('login')
  async loginUser(@Body() LoginuserDto: CreateUserDto) {
    return await this.UserService.loginUser(LoginuserDto);
  }
}
