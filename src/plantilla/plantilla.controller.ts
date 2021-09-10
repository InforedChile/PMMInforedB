import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePlantillaDTO, EditPlantillaDTO } from './dto';
import { Plantilla } from './entities/plantilla.entity';
import { PlantillaService } from './plantilla.service';

@ApiTags('Plantilla')
@Controller('plantilla')
export class PlantillaController {
    constructor(
        private readonly plantillaService: PlantillaService
    ){}

    @Get('')
    async getMany(){
        return await this.plantillaService.getMany()
    }

    @ApiResponse({
        type: Plantilla
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPlantilla: number){
        return await this.plantillaService.getOne(idPlantilla)
    }

    @Get('filtrar/Organizacion/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg: number){
        return await this.plantillaService.getByOrg(idOrg)
    }

    @Post('add')
    async addPlantilla(@Body() plantillaDTO: CreatePlantillaDTO){
        return await this.plantillaService.addPlantilla(plantillaDTO)
    }

    @Put('edit/:id')
    async editPlantilla(@Param('id',ParseIntPipe) idPlantilla:number,@Body() plantillaDTO: EditPlantillaDTO){
        return await this.plantillaService.editPlantilla(idPlantilla,plantillaDTO)
    }

    @Delete('delete/:id')
    async deletePlantilla(@Param('id',ParseIntPipe) idPlantilla:number){
        return await this.plantillaService.deletePlantilla(idPlantilla)
    }
}
