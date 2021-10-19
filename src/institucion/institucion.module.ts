import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from 'src/ciudad/ciudad.module';
import { OrganizacionModule } from 'src/organizacion/organizacion.module';
import { PlantillaModule } from 'src/plantilla/plantilla.module';
import { SubcategoriaModule } from 'src/subcategoria/subcategoria.module';
import { Institucion } from './entities';
import { InstitucionController } from './institucion.controller';
import { InstitucionService } from './institucion.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Institucion]),
    CiudadModule,
    SubcategoriaModule,
    OrganizacionModule,
    PlantillaModule
  ],
  controllers: [InstitucionController],
  providers: [InstitucionService],
  exports: [InstitucionService]
})
export class InstitucionModule {}
