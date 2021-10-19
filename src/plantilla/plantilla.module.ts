import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizacionModule } from 'src/organizacion/organizacion.module';
import { Plantilla } from './entities/plantilla.entity';
import { PlantillaController } from './plantilla.controller';
import { PlantillaService } from './plantilla.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Plantilla]),
    OrganizacionModule
  ],
  controllers: [PlantillaController],
  providers: [PlantillaService],
  exports: [PlantillaService]
})
export class PlantillaModule {}
