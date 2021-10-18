import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ST } from 'src/enums';
import { validarRut } from 'src/functions';
import { validarTelefono } from 'src/functions';
import { InstitucionService } from 'src/institucion/institucion.service';
import { OrganizacionService } from 'src/organizacion/organizacion.service';
import { Repository } from 'typeorm';
import { CreatePersonaDTO } from './dto';
import { EditPersonaDTO } from './dto/edit_persona.dto';
import { Persona } from './entities';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
        private readonly organizacionService: OrganizacionService,
        private readonly institucionService: InstitucionService
    ){}

    async getMany():Promise<Persona[]>{
        const data = await this.personaRepository.find()
        if(data.length === 0) throw new NotFoundException('No hay personas registradas')
        return data
    }

    async getOne(idPersona: number):Promise<Persona>{
        const data= await this.personaRepository.findOne({where:{id_persona:idPersona}})
        if(!data) throw new NotFoundException('Persona no encontrada')
        return data
    }

    async getByOrg(idOrg: number):Promise<Persona[]>{
        const data = await this.personaRepository.find({where:{id_organizacion:idOrg}})
        if(data.length === 0) throw new NotFoundException('No hay personas registradas')
        return data
    }

    async getByInt(idInt: number):Promise<Persona[]>{
        const data = await this.personaRepository.find({where:{id_institucion:idInt}})
        if(data.length === 0) throw new NotFoundException('No hay personas registradas')
        return data
    }

    async getByOrgByST(idOrg: number,st: ST):Promise<Persona[]>{
        const data = await this.personaRepository.find({where:{id_organizacion:idOrg,st_persona:st}})
        if(data.length === 0) throw new NotFoundException('No hay personas registradas')
        return data
    }

    async getByIntByST(idInt: number,st: ST):Promise<Persona[]>{
        const data = await this.personaRepository.find({where:{id_institucion:idInt,st_persona:st}})
        if(data.length === 0) throw new NotFoundException('No hay personas registradas')
        return data
    }

    async addPersona(personaDTO:CreatePersonaDTO):Promise<Persona>{
        /* Validadaciones */
        /* organizacion */
        await this.organizacionService.getOne(personaDTO.id_organizacion)
        /* institución */
        if(personaDTO.id_institucion){
            const inst = await this.institucionService.getById(personaDTO.id_institucion)
            if(inst.id_organizacion !== personaDTO.id_organizacion) throw new BadRequestException('La institución indicada no pertenece a la organización indicada')
        }
        /* rut */
        const [bool,msg] = validarRut(personaDTO.rut) 
        if(!bool) throw new BadRequestException(msg)  // formato rut 
        const per = await this.personaRepository.findOne({where:{
            rut: personaDTO.rut,
            id_institucion:personaDTO.id_institucion
        }})
        if(per) throw new BadRequestException('Persona ya registrada en la organización') // verifico que no este registrado en la organización
        /* telefono */
        if(personaDTO.telefono){
            const [bool,msg] = validarTelefono(personaDTO.telefono)
            if(!bool) throw new BadRequestException(msg)
        }

        /* Crear */
        const newPersona = await this.personaRepository.create(personaDTO)
        const persona = await this.personaRepository.save(newPersona)
        return persona
    }
    
    async editPersona(idPersona:number,personaDTO:EditPersonaDTO):Promise<Persona>{
        /* Validaciones */
        const persona = await this.getOne(idPersona) //existencia
        /* telefono */
        if(personaDTO.telefono){
            const [bool,msg] = validarTelefono(personaDTO.telefono)
            if (!bool) throw new BadRequestException(msg)
        }
        /* institución */
        
        if(personaDTO.id_institucion){
            const inst = await this.institucionService.getById(personaDTO.id_institucion)
            if(persona.id_organizacion !== inst.id_organizacion ) throw new BadRequestException("Institución debe pertenecer a la organización")
            const per = await this.personaRepository.findOne({where:{rut:persona.rut,id_institucion:personaDTO.id_institucion}})
            if(persona.id_institucion !== personaDTO.id_institucion) if(per) throw new BadRequestException('Persona ya registrada en esta institución')

        }


        /* Editar  */
        const editPersona = await Object.assign(persona,personaDTO)
        return await this.personaRepository.save(editPersona)
    }

    async deletePersona(idPersona:number):Promise<Persona>{
        const persona = await this.getOne(idPersona)
        return await this.personaRepository.remove(persona)
    }

}
