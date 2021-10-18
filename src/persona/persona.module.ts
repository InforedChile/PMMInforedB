import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionModule } from 'src/institucion/institucion.module';
import { OrganizacionModule } from 'src/organizacion/organizacion.module';
import { Persona } from './entities';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Persona]),
    OrganizacionModule,
    InstitucionModule
  ],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule {}
