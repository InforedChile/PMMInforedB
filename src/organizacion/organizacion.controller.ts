import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
   
    /* Get */

    @ApiOperation({
        summary: 'Entrega la lista de organizaciones registradas'
    })
    @ApiOkResponse({
        description: 'Lista de organizaciones',
        type:[Organizacion]
    })
    @ApiBadRequestResponse({
        description: 'No hay organizaciones registradas'
    })
    @Get()
    async getMany(){
        const data = await this.organizacionService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega la organización solicitada según su id'
    })
    @ApiOkResponse({
        description: 'Organizacion solicitada',
        type: Organizacion
    })
    @ApiNotFoundResponse({
        description: 'Organización no encontrada',
    })
    @ApiBadRequestResponse({
        description: 'Id Organización entregada en formato invalido'
    })
    @Get('/ver/:id')
    async getOne(@Param('id',ParseIntPipe) idOrg:number ){
        const data = await this.organizacionService.getOne(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega la lista de organizaciones filtrandolas segun su estatus de autorizadas o no.'
    })
    @ApiOkResponse({
        description: 'Lista de organizaciones',
        type:[Organizacion]
    })
    @ApiBadRequestResponse({
        description: 'Parametro incorrecto',
    })
    @ApiNotFoundResponse({
        description: 'No hay organizaciones registradas con ese estado',
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500,
    })
    @Get('/filtrar/auth/:bool')
    async getByAuth(@Param('bool',new ParseEnumPipe(BOOL)) authOrg: BOOL){
        const data = await this.organizacionService.getByAuth(authOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* POST */

    @ApiOperation({
        summary:'Agrega una Organizacion a la Base de Datos'
    })
    @ApiOkResponse({
        description: 'Organizacion creada correctamente',
        type: Organizacion
    })
    @ApiBadRequestResponse({
        description: 'Error de ingreso de parametros',
    })
    @Post('add')
    async createOne(@Body() dtoOrg: CreateOrgDTO){
        const data = await this.organizacionService.createOne(dtoOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }


    /* PUT */

    @ApiOperation({
        summary: 'Edita la informacion de una organización'   
    })
    @ApiOkResponse({
        description: 'Actualiza una organización',
        type: Organizacion
    })
    @ApiBadRequestResponse({
        description: 'Datos ingresados en formato invalido'
    })
    @ApiNotFoundResponse({
        description: 'Organización no encontrada'
    })
    @Put('/edit/:idOrg')
    async editOne(@Param('idOrg',ParseIntPipe) idOrg:number , @Body() dtoOrg: EditOrgDTO){
        const data = await this.organizacionService.editOne(idOrg,dtoOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* Delete */

    @ApiOperation({
        summary: 'Elimina una organización'   
    })
    @ApiOkResponse({
        description: 'Organización Eliminada'
    })
    @ApiBadRequestResponse({
        description: 'Id ingresada en formato invalido'
    })
    @ApiNotFoundResponse({
        description: 'Organización no encontrada'
    })
    @Delete('/delete/:idOrg')
    async deleteOne(@Param('idOrg',ParseIntPipe) idOrg:number){
        const data = await this.organizacionService.deleteOne(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
}
