import { Module } from '@nestjs/common';
import { InstitucionController } from './institucion.controller';
import { InstitucionService } from './institucion.service';

@Module({
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
