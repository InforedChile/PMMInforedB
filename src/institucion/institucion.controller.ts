import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CreateInstitucionDTO, EditInstitucionDTO } from './dto';
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
    @ApiResponse({
        description: 'Institucion encontrada',
        status: 200,
        type: Institucion
    })
    @ApiResponse({
        description: 'ID ingresada erronea ',
        status: 400
    })
    @ApiResponse({
        description: 'No se encuentra la institucion solicitada',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Get('ver/:id')
    async getOne(@Param('id',ParseIntPipe) idInst:number){
        return await this.institucionService.getById(idInst)
    }

    @ApiOperation({
        summary: 'Entrega las instituciones asociadas a una sola organización'
    })
    @ApiResponse({
        description: 'Lista de instituciones asociadas a la organizacion solicitada',
        status: 200,
        type: [Institucion]
    })
    @ApiResponse({
        description: 'ID ingresada erronea ',
        status: 400
    })
    @ApiResponse({
        description: 'No hay instituciones asociadas a la organizacion solicitada',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Get('filtrar/org/:id')
    async getByOrg(@Param('id',ParseIntPipe) idOrg:number){
        return await this.institucionService.getByOrg(idOrg)
    }

    @ApiOperation({
        summary: 'Entrega las instituciones asociadas a una sola organización según su estado'
    })
    @ApiResponse({
        description: 'Lista de instituciones asociadas a la organizacion solicitada',
        status: 200,
        type: [Institucion]
    })
    @ApiResponse({
        description: 'ID ingresada erronea, estado ingresado erroneo',
        status: 400
    })
    @ApiResponse({
        description: 'No hay instituciones asociadas a la organizacion solicitada con el estado indicado',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Get('filtrar/org/:id/estado/:st')
    async getByOrgBySt(@Param('id',ParseIntPipe) idOrg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        return await this.institucionService.getByOrgBySt(idOrg,st)
    }



    @ApiOperation({
        summary: 'Agrega nuevas instituciones a la base de datos'
    })
    @ApiResponse({
        description: 'Institucion nueva',
        status: 201,
        type: Institucion
    })
    @ApiResponse({
        description: 'Datos erroneos',
        status: 400
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Post('add')
    addOne(@Body() crearDTO:CreateInstitucionDTO){
        return this.institucionService.createOne(crearDTO)
    }

    @ApiOperation({
        summary: 'Edita los datos de una institucion'
    })
    @ApiResponse({
        description: 'Institucion editada',
        status: 200,
        type: Institucion
    })
    @ApiResponse({
        description: 'Datos erroneos',
        status: 400
    })
    @ApiResponse({
        description: 'Institucion no encontrada',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Put('/edit/:id')
    editOne(@Param('id',ParseIntPipe) idInst:number,@Body() editDTO: EditInstitucionDTO){
        return this.institucionService.editOne(idInst,editDTO)
    }

    @ApiOperation({
        summary: 'Elimina una insritucion'
    })
    @ApiResponse({
        description: 'Institucion eliminada',
        status: 200,
        type: Institucion
    })
    @ApiResponse({
        description: 'Institucion no encontrada',
        status: 404
    })
    @ApiResponse({
        description: 'Internal server error',
        status: 500
    })
    @Delete('/delete/:id')
    deleteOne(@Param('id',ParseIntPipe) idInst:number){
        return this.institucionService.deleteOne(idInst)
    }

    

}
