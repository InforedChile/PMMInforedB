import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizacionService } from 'src/organizacion/organizacion.service';
import { Repository } from 'typeorm';
import { CreatePlantillaDTO, EditPlantillaDTO } from './dto';
import { Plantilla } from './entities/plantilla.entity';


export class PlantillaService {
    constructor(
        @InjectRepository(Plantilla)
        private readonly plantillaRepository: Repository<Plantilla>,
        private readonly organizacionService: OrganizacionService
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
        /* Verificaciones */
        await  this.organizacionService.getOne(plantillaDTO.id_organizacion) // existencia organización
        const plantillaName= await  this.plantillaRepository.findOne({where:{
            id_organizacion:plantillaDTO.id_organizacion,
            nombre_plantilla:plantillaDTO.nombre_plantilla}})
        if(plantillaName) throw new BadRequestException('Plantilla ya registrada')
        /* Creación */
        const nuevaPlantilla = await this.plantillaRepository.create(plantillaDTO)
        const plantilla = await this.plantillaRepository.save(nuevaPlantilla)        
        return plantilla
    }

    async editPlantilla(idPlantilla:number, editPlantillaDTO:EditPlantillaDTO):Promise<Plantilla>{
        const plantilla = await this.getOne(idPlantilla)
        /* Verificacion */
        if(editPlantillaDTO.nombre_plantilla){
            const plantillaname = await this.plantillaRepository.findOne({where:{
                id_organizacion:plantilla.id_organizacion,
                nombre_plantilla: editPlantillaDTO.nombre_plantilla
            }})
            if(plantillaname && plantillaname.id_plantilla !== plantilla.id_plantilla)  throw new BadRequestException('Nombre ya registrado')
        }
        /* Edición */
        const editPlantilla = Object.assign(plantilla,editPlantillaDTO)
        return await this.plantillaRepository.save(editPlantilla)
    }

    async deletePlantilla(idPlantilla: number):Promise<Plantilla>{
        const plantilla= await this.getOne(idPlantilla)
        return await this.plantillaRepository.remove(plantilla)
    }
}
