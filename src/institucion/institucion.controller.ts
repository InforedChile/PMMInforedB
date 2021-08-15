import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInstitucionDTO } from './dto';
import { Institucion } from './entities';
import { InstitucionService } from './institucion.service';

@ApiTags('Institucion')
@Controller('inst')
export class InstitucionController {
    constructor(
        private readonly institucionService: InstitucionService
    ){}

    @ApiOperation({
        summary: 'Enlista instituciones registradas del sistema'
    })
    @ApiResponse({
        description: 'Lista de instituciones registradas',
        status: 200,
        type: [Institucion]
    })
    @ApiResponse({
        description: 'No hay instituciones registradas',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Get()
    async getMany(){
        return await this.institucionService.getMany()
    }

    @ApiOperation({
        summary: 'Entrega los datos de una sola institución'
    })
    @Get('ver/:id')
    async getOne(@Param('id',ParseIntPipe) idInst:number){
        return await this.institucionService.getById(idInst)
    }

    @ApiOperation({
        summary: 'Entrega las instituciones asociadas a una sola organización'
    })
    @Get('filtrar/org/:id')
    async getByOrg(@Param('id',ParseIntPipe) idOrg:number){
        return await this.institucionService.getByOrg(idOrg)
    }

    @ApiOperation({
        summary: 'Agrega nuevas instituciones a la base de datos'
    })
    @Post()
    addOne(@Body() crearDTO:CreateInstitucionDTO){
        return this.institucionService.createOne(crearDTO)
    }

    @ApiOperation({
        summary: 'No Implementado'
    })
    @Put()
    editOne(){
        return this.institucionService.editOne()
    }

    @ApiOperation({
        summary: 'No implementado'
    })
    @Delete()
    deleteOne(){
        return this.institucionService.deleteOne()
    }

    

}
