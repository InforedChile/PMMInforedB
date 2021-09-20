import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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
    @ApiResponse({
        type: Persona
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

    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPer:number){
        const data = await this.personaService.getOne(idPer)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/org/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg:number){
        const data = await this.personaService.getByOrg(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/inst/:idInt')
    async getByInt(@Param('idInt',ParseIntPipe) idInt:number){
        const data = await this.personaService.getByInt(idInt)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/org/:idOrg/estado/:st')
    async getByOrgBySt(@Param('idOrg',ParseIntPipe) idOrg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.personaService.getByOrgByST(idOrg,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/inst/:idInt/estado/:st')
    async getByIntBySt(@Param('idInt',ParseIntPipe) idInt:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.personaService.getByIntByST(idInt,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Post('add')
    async addPersona(@Body() personaDTO: CreatePersonaDTO){
        const data = await this.personaService.addPersona(personaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Put('edit/:id')
    async editPersona(@Param('id',ParseIntPipe) idPersona: number,@Body() personaDTO:EditPersonaDTO){
        const data = await this.personaService.editPersona(idPersona,personaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

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
