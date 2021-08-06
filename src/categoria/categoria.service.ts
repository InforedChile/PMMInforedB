import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities';

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>){}

    async getCategorias(){
        return await this.categoriaRepository.find()
    }

    async getById(idCategoria:number){
        return this.categoriaRepository.findOne({where:{id_publico_cate: idCategoria}})
    }
}
