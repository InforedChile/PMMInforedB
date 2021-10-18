import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { SubcategoriaModule } from 'src/subcategoria/subcategoria.module';
import { Organizacion } from './entities';
import { OrganizacionController } from './organizacion.controller';
import { OrganizacionService } from './organizacion.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([Organizacion]),
    CategoriaModule,
    SubcategoriaModule
  ],
  controllers: [OrganizacionController],
  providers: [OrganizacionService],
  exports:[OrganizacionService]
})
export class OrganizacionModule {}
