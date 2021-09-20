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
        const data = await this.plantillaService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiResponse({
        type: Plantilla
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPlantilla: number){
        const data = await this.plantillaService.getOne(idPlantilla)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/Organizacion/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg: number){
        const data = await this.plantillaService.getByOrg(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Post('add')
    async addPlantilla(@Body() plantillaDTO: CreatePlantillaDTO){
        const data = await this.plantillaService.addPlantilla(plantillaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Put('edit/:id')
    async editPlantilla(@Param('id',ParseIntPipe) idPlantilla:number,@Body() plantillaDTO: EditPlantillaDTO){
        const data = await this.plantillaService.editPlantilla(idPlantilla,plantillaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Delete('delete/:id')
    async deletePlantilla(@Param('id',ParseIntPipe) idPlantilla:number){
        const data = await this.plantillaService.deletePlantilla(idPlantilla)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
}
