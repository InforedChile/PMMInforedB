import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ST } from 'src/enums';
import { Repository } from 'typeorm';
import { Ciudad } from './entities';

@Injectable()
export class CiudadService {
    constructor(
        @InjectRepository(Ciudad)
        private readonly ciudadRepository: Repository<Ciudad>
    ){}
    
    async getCiudades():Promise<Ciudad[]>{
        const data=  await this.ciudadRepository.find()
        if(data.length===0) throw new NotFoundException('No hay Ciudades registradas')
        return data
    }

    async getByRegion(idRegion: number){
        const data = await this.ciudadRepository.find({where:{id_region: idRegion}})
        if(data.length=== 0 ) throw new NotFoundException(`No hay Ciudades registradas en la ${idRegion} region`)
        return data
    }

    async getById(idCiudad: number){
        const data = await this.ciudadRepository.findOne({where:{id_ciudad:idCiudad}})
        if(!data) throw new NotFoundException('Ciudad no encontrada')
        return data
    }

    async getBySTByReg(idReg: number, st: ST):Promise<Ciudad[]>{
        const data = await this.ciudadRepository.find({where:{id_region: idReg, st_ciudad: st}})
        if (data.length === 0) throw new NotFoundException(` No hay ciudades registradas en la region "${idReg}" con el estado "${st}"`)
        return data
    }
    
}
