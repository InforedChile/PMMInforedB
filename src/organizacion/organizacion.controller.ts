import { Body, Controller, Get, Param, ParseEnumPipe, ParseIntPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BOOL } from 'src/enums';
import { CreateOrgDTO } from './dto';
import { Organizacion } from './entities';
import { OrganizacionService } from './organizacion.service';

@ApiTags('Organizacion')
@Controller('org')
export class OrganizacionController {
    constructor(
        private readonly organizacionService: OrganizacionService
    ){}
    
    @ApiOperation({
        summary: 'Entrega la lista de organizaciones registradas'
    })
    @ApiResponse({
        description: 'Lista de organizaciones',
        status: 200,
        type:[Organizacion]
    })
    @ApiResponse({
        description: 'No hay organizaciones registradas',
        status: 404,
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500,
    })
    @Get()
    async getMany(){
        return await this.organizacionService.getMany()
    }

    @ApiOperation({
        summary: 'Entrega la organización solicitada según su id'
    })
    @ApiResponse({
        description: 'Organizacion solicitada',
        status: 200,
        type: Organizacion
    })
    @ApiResponse({
        description: 'Organización no encontrada',
        status: 404,
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500,
    })
    @Get('/ver/:id')
    async getOne(@Param('id',ParseIntPipe) idOrg:number ){
        return await this.organizacionService.getOne(idOrg)
    }

    @ApiOperation({
        summary: 'Entrega la lista de organizaciones filtrandolas segun su estatus de autorizadas o no.'
    })
    @ApiResponse({
        description: 'Lista de organizaciones',
        status: 200,
        type:[Organizacion]
    })
    @ApiResponse({
        description: 'Parametro incorrecto',
        status: 400,
    })
    @ApiResponse({
        description: 'No hay organizaciones registradas con ese estado',
        status: 404,
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500,
    })
    @Get('/filtrar/auth/:bool')
    async getByAuth(@Param('bool',new ParseEnumPipe(BOOL)) authOrg: BOOL){
        return await this.organizacionService.getByAuth(authOrg)
    }

    @Post()
    async createOne(@Body() dtoOrg: CreateOrgDTO){
        return await this.organizacionService.createOne(dtoOrg)
    }
}
