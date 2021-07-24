import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategoria } from './entities';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Subcategoria])
  ],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService]
})
export class SubcategoriaModule {}
