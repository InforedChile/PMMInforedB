import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ST } from 'src/enums';
import { Repository } from 'typeorm';
import { CreateSubcategoriaDTO, EditSubcategoriaDTO } from './dto';
import { Subcategoria } from './entities';

@Injectable()
export class SubcategoriaService {
    constructor(
        @InjectRepository(Subcategoria)
        private readonly subcategoriaRepository: Repository<Subcategoria>
    ){}

    async getMany():Promise<Subcategoria[]>{
        const data = await this.subcategoriaRepository.find()
        if(data.length === 0) throw new NotFoundException('No hay subcategorias registradas')
        return data 
    }

    async getOne(idSub:number):Promise<Subcategoria>{
        const data= await this.subcategoriaRepository.findOne({where:{id_publico_cate_sub:idSub}})
        if(!data) throw new NotFoundException('Subcategoria no encontrada')
        return data
    }
    
    
    async getByCate(idCate:number):Promise<Subcategoria[]>{
        const data = await this.subcategoriaRepository.find({where:{id_publico_cate:idCate}})
        if(data.length === 0) throw new NotFoundException('No hay subcategorias registradas')
        return data 
    }

    async getByCateByST(idCate:number,st:ST):Promise<Subcategoria[]>{
        const data = await this.subcategoriaRepository.find({where:{id_publico_cate:idCate,st_publico_cate_sub:st}})
        if(data.length === 0) throw new NotFoundException('Not Found')
        return data 
    }

    async addSubcategoria(subcate: CreateSubcategoriaDTO):Promise<Subcategoria>{
        /* Verificaciones */

        /* Agregar Subcategoria  */
        const newSubcategoria = await this.subcategoriaRepository.create(subcate) 
        const subcategoria = await this.subcategoriaRepository.save(newSubcategoria)
        return subcategoria
    }

    async ediSubcategoria(idsub:number, subcateDTO:EditSubcategoriaDTO):Promise<Subcategoria>{
        const subcategoria = await this.getOne(idsub)
        const editSubcate = await Object.assign(subcategoria,subcateDTO)
        return await this.subcategoriaRepository.save(editSubcate)
    }

    async deleteSubcategoria(idSub:number){
        const subcate= await this.getOne(idSub)
        return this.subcategoriaRepository.remove(subcate)
    }
}
