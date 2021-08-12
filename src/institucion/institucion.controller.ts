import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInstitucionDTO } from './dto';
import { Institucion } from './entities';
import { InstitucionService } from './institucion.service';

@ApiTags('Institucion')
@Controller('inst')
export class InstitucionController {
    constructor(
        private readonly institucionService: InstitucionService
    ){}

    @Get()
    async getMany(){
        return await this.institucionService.getMany()
    }

    @Get('ver/:id')
    async getOne(@Param('id',ParseIntPipe) idInst:number){
        return await this.institucionService.getById(idInst)
    }

    @Get('filtrar/org/:id')
    async getByOrg(@Param('id',ParseIntPipe) idOrg:number){
        return await this.institucionService.getByOrg(idOrg)
    }

    @Post()
    addOne(@Body() crearDTO:CreateInstitucionDTO){
        return this.institucionService.createOne(crearDTO)
    }

    

}
