import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

    async createOne(){}

    async editOne(){}

    async deleteOne(){}
}
