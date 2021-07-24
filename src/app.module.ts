
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { InstitucionModule } from './institucion/institucion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';

@Module({
  imports: [CiudadModule, OrganizacionModule, InstitucionModule, CategoriaModule, SubcategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
