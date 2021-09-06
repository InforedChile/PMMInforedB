import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plantilla } from './entities/plantilla.entity';
import { PlantillaController } from './plantilla.controller';
import { PlantillaService } from './plantilla.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Plantilla])
  ],
  controllers: [PlantillaController],
  providers: [PlantillaService]
})
export class PlantillaModule {}
