import { Controller, Get, Param, ParseEnumPipe, ParseIntPipe} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './entities';

@ApiTags('Ciudad')
@Controller('ciudad')
export class CiudadController {

    constructor( private readonly ciudadService: CiudadService ){}
    
    @ApiOperation({
        summary: 'Enlista ciudades registradas del sistema'
    })
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

    @ApiOperation({
        summary: 'Busca ciudades segun su id'
    })
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

    @ApiOperation({
        summary: 'Enlista ciudad registradas en la región indicada'
    })
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

    @ApiOperation({
        summary: 'Filtra las ciudades según su región y su estado '
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de ciudades',
        type: [Ciudad]
    })
    @ApiResponse({
        status: 400,
        description: 'Id región entregada no valida'
    })
    @ApiResponse({
        status: 400,
        description: `Estado entregado no es valido, estos deben ser "${ST.ACTIVO}" o "${ST.INACTIVO}"`
    })
    @ApiResponse({
        status: 404,
        description: 'No hay ciudades en la región con el estado indicado'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    @Get('/filtrar/reg/:idReg/estado/:st')
    async getByRegByST(@Param('idReg',ParseIntPipe) idReg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        return await this.ciudadService.getBySTByReg(idReg,st)
    }


}
