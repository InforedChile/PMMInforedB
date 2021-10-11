import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { ST } from 'src/enums';
import { Repository } from 'typeorm';
import { CreateSubcategoriaDTO, EditSubcategoriaDTO } from './dto';
import { Subcategoria } from './entities';

@Injectable()
export class SubcategoriaService {
    constructor(
        @InjectRepository(Subcategoria)
        private readonly subcategoriaRepository: Repository<Subcategoria>,
        private readonly categoriaService: CategoriaService
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

        const categoria= await this.categoriaService.getById(subcate.id_publico_cate) //verificacion de existencia
        if(categoria.st_publico_cate===ST.INACTIVO) throw new BadRequestException('Categoria debe estar activa')
        const subcatego= await this.subcategoriaRepository.findOne({where:{nombre_publico_cate_sub: subcate.nombre_publico_cate_sub}}) // solo se pueden registrar categorias activas
        if (subcatego) throw new BadRequestException('Nombre ya registrado') // existencia por nombre 

        /* Agregar Subcategoria  */
        const newSubcategoria = await this.subcategoriaRepository.create(subcate) 
        const subcategoria = await this.subcategoriaRepository.save(newSubcategoria)
        return subcategoria
    }

    async ediSubcategoria(idsub:number, subcateDTO:EditSubcategoriaDTO):Promise<Subcategoria>{
        /* Validaciones */
        const subcategoria = await this.getOne(idsub) // valido existencia
        if(subcateDTO.id_publico_cate){ //valido categoria
            const cate = await this.categoriaService.getById(subcateDTO.id_publico_cate)
            if(cate.st_publico_cate==ST.INACTIVO) throw new BadRequestException('No se puede seleccionar una categoria inactiva')
        }

        if(subcateDTO.nombre_publico_cate_sub){
            const subcateName= await this.subcategoriaRepository.findOne({where:{nombre_publico_cate_sub:subcateDTO.nombre_publico_cate_sub}})
            if(subcateName) throw new BadRequestException('Nombre ya registrado')
        }

        /* Edición  */
        const editSubcate = await Object.assign(subcategoria,subcateDTO)
        return await this.subcategoriaRepository.save(editSubcate)
    }

    async deleteSubcategoria(idSub:number){
        const subcate= await this.getOne(idSub)
        return this.subcategoriaRepository.remove(subcate)
    }
}
