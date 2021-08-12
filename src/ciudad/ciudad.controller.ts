import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './entities';

@ApiTags('Ciudad')
@Controller('ciudad')
export class CiudadController {

    constructor( private readonly ciudadService: CiudadService ){}
    
    @ApiResponse({
        status: 200,
        description: 'Lista de ciudades',
        type:[Ciudad]
    })
    @ApiResponse({
        status: 404,
        description: 'No hay ciudades registradas'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    @Get()
    async getMany():Promise<Ciudad[]>{
        const data= await this.ciudadService.getCiudades()
        return data
    }

    @ApiResponse({
        status: 200,
        description: 'Ciudad encontrada',
        type:Ciudad
    })
    @ApiResponse({
        status: 400,
        description: 'Id entregada no valida'
    })
    @ApiResponse({
        status: 404,
        description: 'Ciudade no encontrada'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    @Get('/ver/:id')
    async getCity(@Param('id',ParseIntPipe) idCiudad:number){
        return await this.ciudadService.getById(idCiudad)
    }

    @ApiResponse({
        status: 200,
        description: 'Ciudades asociadas a una region',
        type:Ciudad
    })
    @ApiResponse({
        status: 400,
        description: 'Id entregada no valida'
    })
    @ApiResponse({
        status: 404,
        description: 'No hay ciudades en la región'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    @Get('/filtrar/region/:id')
    async getByRegion(@Param('id', ParseIntPipe) idRegion:number){
        return await this.ciudadService.getByRegion(idRegion)
    }
}
