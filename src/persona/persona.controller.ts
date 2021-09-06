import { Controller, Get, Param, ParseEnumPipe, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { PersonaService } from './persona.service';

@ApiTags('Persona')
@Controller('dir')
export class PersonaController {
    constructor(
        private readonly personaService: PersonaService
    ){}

    @Get()
    async getMany(){
        return await this.personaService.getMany()
    }

    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPer:number){
        return await this.personaService.getOne(idPer)
    }

    @Get('filtrar/org/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg:number){
        return await this.personaService.getByOrg(idOrg)
    }

    @Get('filtrar/inst/:idInt')
    async getByInt(@Param('idInt',ParseIntPipe) idInt:number){
        return await this.personaService.getByInt(idInt)
    }

    @Get('filtrar/org/:idOrg/estado/:st')
    async getByOrgBySt(@Param('idOrg',ParseIntPipe) idOrg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        return await this.personaService.getByOrgByST(idOrg,st)
    }

    @Get('filtrar/inst/:idInt/estado/:st')
    async getByIntBySt(@Param('idInt',ParseIntPipe) idInt:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        return await this.personaService.getByIntByST(idInt,st)
    }

    
}
