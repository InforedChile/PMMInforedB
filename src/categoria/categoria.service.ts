import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ST } from 'src/enums';
import { Repository } from 'typeorm';
import { Categoria } from './entities';

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>){}

    async getCategorias():Promise<Categoria[]>{
        const data = await this.categoriaRepository.find()
        if(data.length===0) throw new NotFoundException('No hay categorias registradas')
        return data 
    }
    async getByST(stCate:ST):Promise<Categoria[]>{
        const data = await this.categoriaRepository.find({where:{st_publico_cate:stCate}})
        if (data.length===0) throw new NotFoundException(`No hay categorias marcadas como ${stCate}`)
        return data
    }

    async getById(idCategoria:number):Promise<Categoria>{
        const data= await  this.categoriaRepository.findOne({where:{id_publico_cate: idCategoria}})
        if(!data) throw new NotFoundException('Categoria no encontrada')
        return data
    }

  




}
