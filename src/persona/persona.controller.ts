import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CreatePersonaDTO } from './dto';
import { EditPersonaDTO } from './dto/edit_persona.dto';
import { Persona } from './entities';
import { PersonaService } from './persona.service';

@ApiTags('Persona')
@Controller('dir')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService
    ){}

    /* GET */

    @ApiOperation({
        summary: 'Entrega lista de personas registradas en el sistema'
    })
    @ApiOkResponse({
        description: 'Lista de personas',
        type: [Persona]
    })
    @ApiNotFoundResponse({
        description: 'No hay personas registradas en el sistema'
    })
    @Get()
    async getMany(){
        const data = await this.personaService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }


    @ApiOperation({
        summary: 'Busca una persona segun su id'
    })
    @ApiOkResponse({
        description: 'Persona seleccionada',
        type: Persona
    })
    @ApiNotFoundResponse({
        description: 'Persona no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Id entregada en formato erroneo'
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPer:number){
        const data = await this.personaService.getOne(idPer)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Filtra personas según su organización'
    })
    @ApiOkResponse({
        description:'Lista de personas en la organización indicada',
        type: [Persona]
    })
    @ApiNotFoundResponse({
        description: 'No hay personas registradas en esa organización'
    })
    @ApiBadRequestResponse({
        description: 'Id de la organización en formato erroneo'
    })
    @Get('filtrar/org/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg:number){
        const data = await this.personaService.getByOrg(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Lista de personas segun la institución'
    })
    @ApiOkResponse({
        description: 'Lista de personas asociadas a la institución',
        type: [Persona]
    })
    @ApiNotFoundResponse({
        description: 'Lista de personas no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Id entregada en formato invalido'
    })
    @Get('filtrar/inst/:idInt')
    async getByInt(@Param('idInt',ParseIntPipe) idInt:number){
        const data = await this.personaService.getByInt(idInt)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Filtra las personas según la organización y el estado'
    })
    @ApiOkResponse({
        description: 'Lista de personas segun su organizacion y su estado',
        type: [Persona]
    })
    @ApiNotFoundResponse({
        description: 'No hay personas registradas'
    })
    @ApiBadRequestResponse({
        description: 'Datos entregados en formato erroneo'
    })
    @Get('filtrar/org/:idOrg/estado/:st')
    async getByOrgBySt(@Param('idOrg',ParseIntPipe) idOrg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.personaService.getByOrgByST(idOrg,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Filtra las personas según su institución y su estado'
    })
    @ApiOkResponse({
        description: 'Lista de personas filtadas segun su institución y su estado',
        type: [Persona]
    })
    @ApiNotFoundResponse({
        description: 'No hay personas registradas'
    })
    @ApiBadRequestResponse({
        description: 'Parametros ingresados en formato invalido'
    })
    @Get('filtrar/inst/:idInt/estado/:st')
    async getByIntBySt(@Param('idInt',ParseIntPipe) idInt:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.personaService.getByIntByST(idInt,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* POST */

    @ApiOperation({
        summary: 'Crea personas'
    })
    @ApiOkResponse({
        description: 'Persona creada',
        type: Persona
    })
    @ApiNotFoundResponse({
        description: 'Organizacion o institucion no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Datos ingresados en formato invalido'
    })
    @Post('add')
    async addPersona(@Body() personaDTO: CreatePersonaDTO){
        const data = await this.personaService.addPersona(personaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* PUT */

    @ApiOperation({
        summary: 'Edita una Persona'
    })
    @ApiOkResponse({
        description: 'Persona editada',
        type: Persona
    })
    @ApiNotFoundResponse({
        description: "Persona no encontrada"
    })
    @ApiBadRequestResponse({
        description:"Dato ingresado en formato erroneo"
    })
    @Put('edit/:id')
    async editPersona(@Param('id',ParseIntPipe) idPersona: number,@Body() personaDTO:EditPersonaDTO){
        const data = await this.personaService.editPersona(idPersona,personaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Elimina una Persona'
    })
    @ApiOkResponse({
        description: 'Persona eliminada correctamente',
        type: Persona
    })
    @ApiNotFoundResponse({
        description: 'Persona no encontrada'
    })
    @Delete('delete/:id')
    async deletePersona(@Param('id',ParseIntPipe) idPersona:number){
        const data = await this.personaService.deletePersona(idPersona)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    
}
