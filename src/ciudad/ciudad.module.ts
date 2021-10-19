import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadController } from './ciudad.controller';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([Ciudad])
  ],
  controllers: [CiudadController],
  providers: [CiudadService],
  exports:[CiudadService]
})
export class CiudadModule {}
