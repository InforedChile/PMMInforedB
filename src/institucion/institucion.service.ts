import { BadRequestException, NotAcceptableException } from '@nestjs/common';
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
        /* Validacion de datos */
        //Correo
        if(dto.email1===dto.email2) throw new BadRequestException(['Correos electronicos deben ser distintos'])
        //Telefono
        if(dto.telefono1==dto.telefono2) throw new BadRequestException(['Telefonos deben ser distintos'])
        if(dto.telefono1.substring(0,3)!=="+56") throw new BadRequestException(['Formato de Telefono debe ser +56XXXXXXXXX'])
        if(dto.telefono2){
            if(dto.telefono2.substring(0,3)!=="+56") throw new BadRequestException(['Formato de Telefono debe ser +56XXXXXXXXX'])
        }
        /* Creacion de institucion */
        const newInstitucion =await  this.institucionRepository.create(dto)
        newInstitucion.fecha_crea=new Date();
        const institucion= await this.institucionRepository.save(newInstitucion)
        return newInstitucion
    }

    async editOne(){}

    async deleteOne(){}
}
