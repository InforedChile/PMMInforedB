
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { InstitucionModule } from './institucion/institucion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { PlantillaModule } from './plantilla/plantilla.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //mysql://:/heroku_86f08b136a3f170?reconnect=true
      type:'mysql',
      host:'us-cdbr-east-04.cleardb.com',
      username: 'beff82d81ef854',
      password: 'c2fe8828',
      database: 'heroku_86f08b136a3f170',
      entities: [__dirname+'./**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),CiudadModule, OrganizacionModule, InstitucionModule, CategoriaModule, SubcategoriaModule, PersonaModule, PlantillaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
