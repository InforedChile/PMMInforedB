import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { CategoriaService } from 'src/categoria/categoria.service';
import { Subcategoria } from './entities';
import { SubcategoriaController } from './subcategoria.controller';
import { SubcategoriaService } from './subcategoria.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Subcategoria]),
    CategoriaModule
  ],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService],
  exports: [SubcategoriaService]
})
export class SubcategoriaModule {}
