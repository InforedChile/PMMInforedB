import { BadRequestException, NotAcceptableException } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstitucionDTO } from './dto';
import { Institucion } from './entities';

@Injectable()
export class InstitucionService {
    constructor(
        @InjectRepository(Institucion)
        private readonly institucionRepository : Repository<Institucion>
    ){}
    async getMany():Promise<Institucion[]>{
        const data = await this.institucionRepository.find()
        if(data.length === 0) throw new NotFoundException('No hay intituciones registradas')
        return data
    }

    async getById(id: number):Promise<Institucion>{
        const data = await this.institucionRepository.findOne({where:{id_institucion:id}})
        if (!data) throw new NotFoundException('Institucion no encontrada');
        return data 
    }

    async getByOrg(idOrg: number):Promise<Institucion[]>{
        const data = await this.institucionRepository.find({where:{id_organizacion: idOrg}})
        if(data.length === 0 ) throw new NotFoundException('No hay instituciones asociadas a la organizacion')
        return data
    }

    async createOne(dto: CreateInstitucionDTO){
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
        return institucion
    }

}
