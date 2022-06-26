import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGarageDto } from '../dtos/garage.dto';
import { Garage, GarageDocument } from '../schemas/garage.schema';

@Injectable()
export class GarageService {
  constructor(
    @InjectModel('Garage') private garageModel: Model<GarageDocument>,
  ) {}

  async createGarage(garage: CreateGarageDto): Promise<Garage> {
    return new this.garageModel(garage).save();
  }
}
