
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { OrganizacionModule } from './organizacion/organizacion.module';
import { InstitucionModule } from './institucion/institucion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'myblog_user',
      password: 'myblog_password',
      database: 'myblog_db',
      entities: [__dirname+'./**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),CiudadModule, OrganizacionModule, InstitucionModule, CategoriaModule, SubcategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
