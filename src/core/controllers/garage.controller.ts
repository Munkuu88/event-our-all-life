import { Body, Controller, Post } from '@nestjs/common';
import { CreateGarageDto } from '../dtos/garage.dto';
import { GarageService } from '../services/garage.services';

@Controller('garage')
export class garageController {
  constructor(private readonly GarageService: GarageService) {}

  @Post('')
  async createGarage(@Body() CreateGarageDto: CreateGarageDto) {
    return await this.GarageService.createGarage(CreateGarageDto);
  }
}
