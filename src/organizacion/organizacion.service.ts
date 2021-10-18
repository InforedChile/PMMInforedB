import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { BOOL, ST } from 'src/enums';
import { validarTelefono } from 'src/functions';
import { SubcategoriaService } from 'src/subcategoria/subcategoria.service';
import { Repository } from 'typeorm';
import { CreateOrgDTO, EditOrgDTO } from './dto';
import { Organizacion } from './entities';

@Injectable()
export class OrganizacionService {
    
    constructor( 
        @InjectRepository(Organizacion)
        private readonly organizacionRepository: Repository<Organizacion>,
        private readonly categoriaService: CategoriaService,
        private readonly subcategoriaService: SubcategoriaService,
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
        /* Nombre */
        let org = await this.organizacionRepository.findOne({where:{nombre: dto.nombre}})
        if ( org ) throw new BadRequestException('Nombre ya registrado') // nombre no debe existir 
        /* Email */
        org = await this.organizacionRepository.findOne({where:{correo1:dto.correo1}})
        if(org) throw new BadRequestException('Correo electronico ya registrado')
        if(dto.correo1 === dto.correo2) throw new BadRequestException('Correos deben ser distintos')

        /* Telefono */

        if(dto.telefono1 === dto.telefono2) throw new BadRequestException('Telefonos deben ser distintos')

        const [valido,msg] = validarTelefono(dto.telefono1)
        if(!valido) throw new BadRequestException(`Telefono1:${msg}`)
        if(dto.telefono2){
            const [valido,msg] = validarTelefono(dto.telefono2)
            if(!valido) throw new BadRequestException(`Telefono2:${msg}`)
        }
        
        /* Categoria */
        const cate = await this.categoriaService.getById(dto.id_publico_cate)
        if( cate.st_publico_cate === ST.INACTIVO) throw new BadRequestException('Categoria debe estar Activa')

        /* Subcategoria */
        const subcate = await this.subcategoriaService.getOne(dto.id_publico_cate_sub)
        if( subcate.st_publico_cate_sub === ST.INACTIVO ) throw new BadRequestException('Subcategoria debe estar activa')
        
        /* Creacion de organizacion */

        const newOrg = await this.organizacionRepository.create(dto)
        newOrg.fecha_crea= new Date()
        const organizacion = await this.organizacionRepository.save(newOrg)
        return organizacion
    }

    async editOne(idOrg ,dto: EditOrgDTO){
        /* Validar  */
        const organizacion = await this.getOne(idOrg)
        /* Nombre */
        if(dto.nombre){
            const orgNombre = await this.organizacionRepository.findOne({where:{nombre:dto.nombre}})
            if(orgNombre && orgNombre.id_organizacion !== organizacion.id_organizacion) throw new BadRequestException('Nombre ya registrado')
        }
        /* Correo */
        if(dto.correo1 && dto.correo2 ){
            if (dto.correo1 === dto.correo2 ) throw new BadRequestException('Nuevos correos deben ser distintos')
        } else if(!dto.correo1 && dto.correo2 ){
            if (dto.correo2 === organizacion.correo1 ) throw new BadRequestException('Correo 2 debe ser distinto a correo 1 ') 
        } else if(dto.correo1 && !dto.correo2 ) {
            if (dto.correo1 === organizacion.correo2 ) throw new BadRequestException('Correo 1 debe ser distinto a correo 2')
        }

        if(dto.correo1){
            const orgCorreo = await this.organizacionRepository.findOne({where:{correo1:dto.correo1}})
            if(orgCorreo && orgCorreo.id_organizacion !== organizacion.id_organizacion ) throw new BadRequestException('Nuevo correo 1 ya registado')
        }

        /* Telefonos */
        if(dto.telefono1 && dto.telefono2 ){
            if (dto.telefono1 === dto.telefono2 ) throw new BadRequestException('Nuevos telefonos deben ser distintos')
        } else if(!dto.telefono1 && dto.telefono2 ){
            if (dto.telefono2 === organizacion.telefono1 ) throw new BadRequestException('Telefono 2 debe ser distinto a telefono 1 ') 
        } else if(dto.telefono1 && !dto.telefono2 ) {
            if (dto.telefono1 === organizacion.telefono2 ) throw new BadRequestException('Telefono 1 debe ser distinto a Telefono 2')
        }

        if(dto.telefono1){
            const [valido,msg] = validarTelefono(dto.telefono1)
            if(!valido) throw new BadRequestException(`Telefono1:${msg}`)
        }

        if(dto.telefono2){
            const [valido,msg] = validarTelefono(dto.telefono2)
            if(!valido) throw new BadRequestException(`Telefono2:${msg}`)
        }

        /* Categoria */
        if(dto.id_publico_cate){
            const cate = await this.categoriaService.getById(dto.id_publico_cate)
            if(cate.st_publico_cate === ST.INACTIVO) throw new BadRequestException('Categoria debe estar activa')
        }

        /* Sub Categoria */
        if(dto.id_publico_cate_sub){
            const subCate = await this.subcategoriaService.getOne(dto.id_publico_cate_sub)
            if(subCate.st_publico_cate_sub === ST.INACTIVO ) throw new BadRequestException('Subcategoria debe estar activa')
        }



        /* Editar  */
        const editOrg = Object.assign(organizacion,dto)
        return await this.organizacionRepository.save(editOrg)

    }

    async deleteOne(idOrg:number){
        const organizacion = await this.getOne(idOrg)
        return await this.organizacionRepository.remove(organizacion)

    }
}
