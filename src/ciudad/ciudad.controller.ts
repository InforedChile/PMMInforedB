import { Controller, Get, Param, ParseEnumPipe, ParseIntPipe} from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
    @ApiOkResponse({
        description: 'Lista de ciudades',
        type:[Ciudad]
    })
    @ApiNotFoundResponse({
        description: 'No hay ciudades registradas'
    })
    @Get()
    async getMany(){
        const data = await this.ciudadService.getCiudades()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Busca ciudades segun su id'
    })
    @ApiOkResponse({
        description: 'Ciudad encontrada',
        type:Ciudad
    })
    @ApiBadRequestResponse({
        description: 'Id entregada no valida'
    })
    @ApiNotFoundResponse({
        description: 'Ciudade no encontrada'
    })
    @Get('/ver/:id')
    async getCity(@Param('id',ParseIntPipe) idCiudad:number){
        const data = await this.ciudadService.getById(idCiudad)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Enlista ciudad registradas en la región indicada'
    })
    @ApiOkResponse({
        description: 'Ciudades asociadas a una region',
        type:Ciudad
    })
    @ApiBadRequestResponse({
        description: 'Id entregada no valida'
    })
    @ApiNotFoundResponse({
        description: 'No hay ciudades en la región'
    })
    @Get('/filtrar/region/:id')
    async getByRegion(@Param('id', ParseIntPipe) idRegion:number){
        const data = await this.ciudadService.getByRegion(idRegion)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Filtra las ciudades según su región y su estado '
    })
    @ApiOkResponse({
        description: 'Lista de ciudades',
        type: [Ciudad]
    })
    @ApiBadRequestResponse({
        description: `Estado entregado no es valido, estos deben ser "${ST.ACTIVO}" o "${ST.INACTIVO}"`
    })
    @ApiNotFoundResponse({
        description: 'No hay ciudades en la región con el estado indicado'
    })
    @Get('/filtrar/reg/:idReg/estado/:st')
    async getByRegByST(@Param('idReg',ParseIntPipe) idReg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.ciudadService.getBySTByReg(idReg,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Filtra las ciudades según su estado '
    })
    @ApiOkResponse({
        description: 'Lista de ciudades',
        type: [Ciudad]
    })
    @ApiBadRequestResponse({
        description: `Estado entregado no es valido, estos deben ser "${ST.ACTIVO}" o "${ST.INACTIVO}",o region entregada no es valida`
    })
    @ApiNotFoundResponse({
        description: 'No hay ciudades con el estado indicado'
    })
    @Get('/filtrar/st/:st')
    async  getByST(@Param('st',new ParseEnumPipe(ST)) stCiudad: ST){
        const data = await this.ciudadService.getByST(stCiudad)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }


}
