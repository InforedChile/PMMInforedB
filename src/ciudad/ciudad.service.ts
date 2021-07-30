import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities';

@Injectable()
export class CiudadService {
    constructor(
        @InjectRepository(Ciudad)
        private readonly ciudadRepository: Repository<Ciudad>
    ){}

    async getCiudades(){
        return await this.ciudadRepository.find()
    }

    async getByRegion(idRegion: number){
        return await this.ciudadRepository.find({where:{id_region: idRegion}})
    }

    async getById(idCiudad: number){
        return await this.ciudadRepository.findOne({where:{id_ciudad:idCiudad}})
    }
    
}
