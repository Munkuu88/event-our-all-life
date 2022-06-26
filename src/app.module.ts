import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Munkhsaihan:Saixnaa_99@cluster0.h96fe.mongodb.net/?retryWrites=true&w=majority',
    ),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
