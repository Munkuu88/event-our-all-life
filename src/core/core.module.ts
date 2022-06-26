import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { garageController } from './controllers/garage.controller';
import { GarageSchema } from './schemas/garage.schema';
import { GarageService } from './services/garage.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Garage', schema: GarageSchema }]),
  ],
  controllers: [garageController],
  providers: [GarageService],
})
export class CoreModule {}
