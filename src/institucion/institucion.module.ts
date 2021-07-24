import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucion } from './entities';
import { InstitucionController } from './institucion.controller';
import { InstitucionService } from './institucion.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Institucion])
  ],
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
