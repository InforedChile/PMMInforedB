import { BadRequestException, NotAcceptableException, NotImplementedException } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CiudadService } from 'src/ciudad/ciudad.service';
import { BOOL, ST } from 'src/enums';
import { validarCoord, validarTelefono } from 'src/functions';
import { OrganizacionService } from 'src/organizacion/organizacion.service';
import { PlantillaService } from 'src/plantilla/plantilla.service';
import { SubcategoriaService } from 'src/subcategoria/subcategoria.service';
import { Repository } from 'typeorm';
import { CreateInstitucionDTO, EditInstitucionDTO } from './dto';
import { Institucion } from './entities';

@Injectable()
export class InstitucionService {
    constructor(
        @InjectRepository(Institucion)
        private readonly institucionRepository : Repository<Institucion>,
        private readonly subcategoriaService: SubcategoriaService,
        private readonly ciudadService: CiudadService,
        private readonly organizacionService: OrganizacionService,
        private readonly plantillaService: PlantillaService
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

    async getByOrgBySt(idOrg: number, st:ST):Promise<Institucion[]>{
        const data = await this.institucionRepository.find({where:{id_organizacion: idOrg,st_institucion:st}})
        if(data.length === 0) throw new NotFoundException(`No hay instituciones con estado ${st} asociadas a la organizacion indicada`)
        return data 
    }

    async createOne(dto: CreateInstitucionDTO){
        /* Validacion de datos */
        /* Subcategoria */
        const subcate = await this.subcategoriaService.getOne(dto.id_publico_cate_sub)
        if(subcate.st_publico_cate_sub === ST.INACTIVO ) throw new BadRequestException('Subcategoria debe estar activo')
        /* Ciudad */
        const ciudad = await this.ciudadService.getById(dto.id_ciudad)
        if(ciudad.st_ciudad === ST.INACTIVO) throw new BadRequestException('Ciudad debe estar activa')
        /* Titulo */
        const instTit = await this.institucionRepository.findOne({where:{titulo_institucion:dto.titulo_institucion}})
        if(instTit) throw new BadRequestException('Institución ya registrada')
        /* Coord */
        /* Latitud */
        let lat = false;
        if(dto.latitud){
            lat = true;
            const [validacion,msg] = validarCoord(dto.latitud)
            if(!validacion) throw new BadRequestException(`Latitud: ${msg}`)
        }
        /* Longitud */
        let lon = false;
        if(dto.longitud){
            lon = true;
            const [validacion,msg] = validarCoord(dto.longitud)
            if(!validacion) throw new BadRequestException(`Longitud: ${msg}`)
        } 
        /* 2 o nada */
        if((!lat && lon) || (lat && !lon)) throw new BadRequestException('Se deben ingresar ambas coordenadas, o no se debe ingresar ninguna')
        /* Telefonos */
        if(dto.telefono1 === dto.telefono2 ) throw new BadRequestException('Telefonos deben ser distintos')
        const [valTel,msgTel] = validarTelefono(dto.telefono1)
        if(!valTel) throw new BadRequestException(`Telefono1: ${msgTel}`) 
        if(dto.telefono2){
            const [valTel,msgTel] = validarTelefono(dto.telefono2)
            if(!valTel) throw new BadRequestException(`Telefono2: ${msgTel}`)
        }

        //Correo
        if(dto.email1===dto.email2) throw new BadRequestException(['Correos electronicos deben ser distintos'])

        // /* Twitter */
        // if(dto.twitter){
        //     if(!dto.twitter.includes('https://twitter.com/')) throw new BadRequestException('Link ingresado no es de twitter')
        // }
        // /* Facebook */
        // if(dto.facebook){ 
        //     if(!dto.facebook.includes('https://www.facebook.com')) throw new BadRequestException('Link ingresado no es de facebook')
        // }
        /* Organización */
        const org = await this.organizacionService.getOne(dto.id_organizacion);
        if(org.auth === BOOL.NO) throw new BadRequestException('Organización no está autorizada ');
        
        /* Plantilla */
        if(dto.id_plantilla > 0){
            const plan = await this.plantillaService.getOne(dto.id_plantilla)
            if(org.id_organizacion !== plan.id_organizacion) throw new BadRequestException('Plantilla no pertenece a la organización indicada')
        }
    
        /* Creacion de institucion */
        const newInstitucion =await  this.institucionRepository.create(dto)
        newInstitucion.fecha_crea=new Date();
        const institucion= await this.institucionRepository.save(newInstitucion)
        return institucion
    }

    async editOne(idInst:number,editDTO:EditInstitucionDTO):Promise<Institucion>{
        const institucion = await this.getById(idInst)
        /* Verificar */
        /* Subcategoria */
        if(editDTO.id_publico_cate_sub){
            const scate = await this.subcategoriaService.getOne(editDTO.id_publico_cate_sub)
            if(scate.st_publico_cate_sub === ST.INACTIVO) throw new BadRequestException('Subcategoria debe estar activa')
        }   
        /* Ciudad */ 
        if(editDTO.id_ciudad){
            const ciudad = await this.ciudadService.getById(editDTO.id_ciudad)
            if(ciudad.st_ciudad === ST.INACTIVO) throw new BadRequestException('Ciudad debe estar activa')
        }
        /* Titulo */

        if (editDTO.titulo_institucion){
            const instTit = await this.institucionRepository.findOne({where:{titulo_institucion:editDTO.titulo_institucion}})
            if(instTit && instTit.id_institucion !== institucion.id_institucion) throw new BadRequestException('Institución ya registrada')
        }

        /* Coord */
        /* Latitud */
        let lat = false;
        if(editDTO.latitud){
            lat = true;
            const [validacion,msg] = validarCoord(editDTO.latitud)
            if(!validacion) throw new BadRequestException(`Latitud: ${msg}`)
        }
        /* Longitud */
        let lon = false;
        if(editDTO.longitud){
            lon = true;
            const [validacion,msg] = validarCoord(editDTO.longitud)
            if(!validacion) throw new BadRequestException(`Longitud: ${msg}`)
        } 
        /* 2 o nada */
        if((!lat && lon) || (lat && !lon)) throw new BadRequestException('Se deben ingresar ambas coordenadas, o no se debe ingresar ninguna')
        /* Telefonos */
        if(editDTO.telefono1 && editDTO.telefono2 ){
            if (editDTO.telefono1 === editDTO.telefono2 ) throw new BadRequestException('Nuevos telefonos deben ser distintos')
        } else if(!editDTO.telefono1 && editDTO.telefono2 ){
            if (editDTO.telefono2 === institucion.telefono1 ) throw new BadRequestException('Telefono 2 debe ser distinto a telefono 1 ') 
        } else if(editDTO.telefono1 && !editDTO.telefono2 ) {
            if (editDTO.telefono1 === institucion.telefono2 ) throw new BadRequestException('Telefono 1 debe ser distinto a Telefono 2')
        }

        if(editDTO.telefono1){
            const [valido,msg] = validarTelefono(editDTO.telefono1)
            if(!valido) throw new BadRequestException(`Telefono1:${msg}`)
        }

        if(editDTO.telefono2){
            const [valido,msg] = validarTelefono(editDTO.telefono2)
            if(!valido) throw new BadRequestException(`Telefono2:${msg}`)
        }
        
        /* Correo */
        if(editDTO.email1 && editDTO.email2 ){
            if (editDTO.email1 === editDTO.email2 ) throw new BadRequestException('Nuevos correos deben ser distintos')
        } else if(!editDTO.email1 && editDTO.email2 ){
            if (editDTO.email2 === institucion.email1 ) throw new BadRequestException('Correo 2 debe ser distinto a correo 1 ') 
        } else if(editDTO.email1 && !editDTO.email2 ) {
            if (editDTO.email1 === institucion.email2 ) throw new BadRequestException('Correo 1 debe ser distinto a correo 2')
        }

        if(editDTO.email1){
            const instEmail = await this.institucionRepository.findOne({where:{email1: editDTO.email1}})
            if(instEmail && instEmail.id_institucion !== institucion.id_institucion) throw new BadRequestException('Correo ya registrado')
        }

        // /* Twitter */
        // if(editDTO.twitter){
        //     if(!editDTO.twitter.includes('https://twitter.com/')) throw new BadRequestException('Link ingresado no es de twitter')
        // }
        // /* Facebook */
        // if(editDTO.facebook){ 
        //     if(!editDTO.facebook.includes('https://www.facebook.com')) throw new BadRequestException('Link ingresado no es de facebook')
        // }
        if(editDTO.id_organizacion){
            const org = await this.organizacionService.getOne(editDTO.id_organizacion);
            if(org.auth === BOOL.NO) throw new BadRequestException('Organización no está autorizada ');
        
        }
        /* Organización */
        if(editDTO.id_plantilla > 0){
            const plan = await this.plantillaService.getOne(editDTO.id_plantilla)
            if(editDTO.id_organizacion !== plan.id_organizacion) throw new BadRequestException('Plantilla no pertenece a la organización indicada')
        }
        if(editDTO.errores>10){
            editDTO.st_institucion= ST.INACTIVO
        }



        /* Editar */
        
        const editInst = Object.assign(institucion,editDTO)
        return await this.institucionRepository.save(editInst)
    }

    async deleteOne(idInst:number){
        const insti = await this.getById(idInst)
        return this.institucionRepository.remove(insti)
    }

}
