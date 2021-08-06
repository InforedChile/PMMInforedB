import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDTO } from './dto';
import { Institucion } from './entities';

@Injectable()
export class InstitucionService {
    constructor(
        @InjectRepository(Institucion)
        private readonly institucionRepository : Repository<Institucion>
    ){}
    async getMany(){
        return await this.institucionRepository.find()
    }

    async getOne(id: number){
        const data = await this.institucionRepository.findOne({id_institucion:id})
        if (!data) throw new NotFoundException('Institucion no encontrada');
        return data 
    }

    async getBy(){}

    async createOne(dto: CreateDTO){
        const newInstitucion =await  this.institucionRepository.create(dto)
        newInstitucion.fecha_crea=new Date();
        const institucion= await this.institucionRepository.save(newInstitucion)
        return newInstitucion
    }

    async editOne(){}

    async deleteOne(){}
}
