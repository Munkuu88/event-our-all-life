import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/authentication.schemas';
import { userController } from './controllers/authentication.controllers';
import { UserService } from './services/authentication.services';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  controllers: [userController],
  providers: [UserService],
})
export class AuthenticationModule {}
