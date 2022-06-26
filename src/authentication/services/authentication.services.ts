import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/authentication.dtos';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/authentication.schemas';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return new this.userModel(user).save();
  }

  async loginUser(user: CreateUserDto): Promise<User> {
    const email = user.email;

    const _user = await this.userModel.findOne({ email });
    return _user;
  }
}
