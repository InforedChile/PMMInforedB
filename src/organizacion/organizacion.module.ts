import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacion } from './entities';
import { OrganizacionController } from './organizacion.controller';
import { OrganizacionService } from './organizacion.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([Organizacion])
  ],
  controllers: [OrganizacionController],
  providers: [OrganizacionService]
})
export class OrganizacionModule {}
