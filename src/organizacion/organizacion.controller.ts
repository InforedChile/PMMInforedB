import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BOOL } from 'src/enums';
import { CreateOrgDTO, EditOrgDTO } from './dto';
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

    @ApiOperation({
        summary:'Agrega una Organizacion a la Base de Datos'
    })
    @ApiResponse({
        description: 'Organizacion creada correctamente',
        status: 201,
        type: Organizacion
    })
    @ApiResponse({
        description: 'Error de ingreso de parametros',
        status: 400,
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500,
    })
    @Post()
    async createOne(@Body() dtoOrg: CreateOrgDTO){
        return await this.organizacionService.createOne(dtoOrg)
    }

    @ApiOperation({
        summary: 'Edita la informacion de una organización'   
    })
    @Put('/edit/:idOrg')
    async editOne(@Param('idOrg',ParseIntPipe) idOrg:number , @Body() dtoOrg: EditOrgDTO){
        return await this.organizacionService.editOne(idOrg,dtoOrg)
    }

    @ApiOperation({
        summary: 'Elimina una organización'   
    })
    @Delete('/delete/:idOrg')
    async deleteOne(@Param('idOrg',ParseIntPipe) idOrg:number){
        return await this.organizacionService.deleteOne(idOrg)
    }
}
