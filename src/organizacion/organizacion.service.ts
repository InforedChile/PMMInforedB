import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { BOOL } from 'src/enums';
import { Repository } from 'typeorm';
import { CreateOrgDTO, EditOrgDTO } from './dto';
import { Organizacion } from './entities';

@Injectable()
export class OrganizacionService {
    
    constructor( 
        @InjectRepository(Organizacion)
        private readonly organizacionRepository: Repository<Organizacion>
    ){}

    async getMany():Promise<Organizacion[]>{
        const data = await this.organizacionRepository.find()
        if(data.length === 0) throw new NotFoundException('No hay organizaciones registradas')
        return data
    }

    async getOne(idOrg: number):Promise<Organizacion>{
        const data = await this.organizacionRepository.findOne({where:{id_organizacion: idOrg}})
        if(!data) throw new NotFoundException('Organizacion no encontrada')
        return data
    }

    async getByAuth(authOrg: BOOL):Promise<Organizacion[]>{
        const data = await this.organizacionRepository.find({where:{auth:authOrg}})
        if(data.length === 0) throw new NotFoundException('Organizaciones no encontradas')
        return data
    }

    async createOne(dto: CreateOrgDTO):Promise<Organizacion>{
        /* Validar Datos */
        /* Email */
        const org = await this.organizacionRepository.findOne({where:{correo1:dto.correo1}})
        if(org) throw new BadRequestException('Correo electronico ya registrado')
        if(dto.correo1 === dto.correo2) throw new BadRequestException('Correos deben ser distintos')

        /* Telefono */

        if(dto.telefono1 === dto.telefono2) throw new BadRequestException('Telefonos deben ser distintos')

        if(dto.telefono1.substring(0,3) !=='+56') throw new BadRequestException('Formato de telefono 1 invalido')
        if(dto.telefono2){
            if(dto.telefono2.substring(0,3) !=='+56') throw new BadRequestException('Formato de telefono 2 invalido')
        }
        /* Categoria y Sub Categoria */

        /* De momento no se validan las categorias y las sub categorias */
        
        /* Creacion de organizacion */

        const newOrg = await this.organizacionRepository.create(dto)
        newOrg.fecha_crea= new Date()
        const organizacion = await this.organizacionRepository.save(newOrg)
        return organizacion
    }

    async editOne(idOrg ,dto: EditOrgDTO){
        const organizacion = await this.getOne(idOrg)
        const editOrg = Object.assign(organizacion,dto)
        return await this.organizacionRepository.save(editOrg)

    }

    async deleteOne(idOrg:number){
        const organizacion = await this.getOne(idOrg)
        return await this.organizacionRepository.remove(organizacion)

    }
}
