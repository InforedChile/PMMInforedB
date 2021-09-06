import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlantillaDTO, EditPlantillaDTO } from './dto';
import { Plantilla } from './entities/plantilla.entity';


export class PlantillaService {
    constructor(
        @InjectRepository(Plantilla)
        private readonly plantillaRepository: Repository<Plantilla>
    ){}

    async getMany():Promise<Plantilla[]>{
        const data = await this.plantillaRepository.find()
        if(data.length === 0) throw new NotFoundException('No hay plantillas registradas')
        return data
    }

    async getOne(idPlantilla: number):Promise<Plantilla>{
        const data = await this.plantillaRepository.findOne({where:{id_plantilla:idPlantilla}})
        if(!data) throw new NotFoundException('Plantilla no encontrada')
        return data
    }

    async getByOrg(idOrg: number):Promise<Plantilla[]>{
        const data = await this.plantillaRepository.find({where:{id_organizacion:idOrg}})
        if(data.length === 0) throw new NotFoundException('No hay plantillas asociadas a la organizacion indicada')
        return data 
    }

    async addPlantilla(plantillaDTO: CreatePlantillaDTO):Promise<Plantilla>{
        const nuevaPlantilla = await this.plantillaRepository.create(plantillaDTO)
        const plantilla = await this.plantillaRepository.save(nuevaPlantilla)        
        return plantilla
    }

    async editPlantilla(idPlantilla:number, editPlantillaDTO:EditPlantillaDTO):Promise<Plantilla>{
        const plantilla = await this.getOne(idPlantilla)
        const editPlantilla = Object.assign(plantilla,editPlantillaDTO)
        return await this.plantillaRepository.save(editPlantilla)
    }

    async deletePlantilla(idPlantilla: number):Promise<Plantilla>{
        const plantilla= await this.getOne(idPlantilla)
        return await this.plantillaRepository.remove(plantilla)
    }
}
