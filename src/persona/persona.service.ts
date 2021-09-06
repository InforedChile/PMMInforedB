import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ST } from 'src/enums';
import { Repository } from 'typeorm';
import { CreatePersonaDTO } from './dto';
import { EditPersonaDTO } from './dto/edit_persona.dto';
import { Persona } from './entities';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>
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
        
        const newPersona = await this.personaRepository.create(personaDTO)
        const persona = await this.personaRepository.save(newPersona)
        return persona
    }
    
    async editPersona(idPersona:number,personaDTO:EditPersonaDTO):Promise<Persona>{
        /* Validaciones */

        const persona = await this.getOne(idPersona)
        const editPersona = await Object.assign(persona,personaDTO)
        return await this.personaRepository.save(editPersona)
    }

    async deletePersona(idPersona:number):Promise<Persona>{
        const persona = await this.getOne(idPersona)
        return await this.personaRepository.remove(persona)
    }

}
