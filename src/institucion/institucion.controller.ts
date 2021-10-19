import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

    /* GET */

    @ApiOperation({
        summary: 'Enlista instituciones registradas del sistema'
    })
    @ApiOkResponse({
        description: 'Lista de instituciones registradas',
        type: [Institucion]
    })
    @ApiNotFoundResponse({
        description: 'No hay instituciones registradas',
    })
    @Get()
    async getMany(){
        const data = await this.institucionService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega los datos de una sola institución'
    })
    @ApiOkResponse({
        description: 'Institucion encontrada',
        type: Institucion
    })
    @ApiBadRequestResponse({
        description: 'ID ingresada erronea '
    })
    @ApiNotFoundResponse({
        description: 'No se encuentra la institucion solicitada',
    })
    @Get('ver/:id')
    async getOne(@Param('id',ParseIntPipe) idInst:number){
        const data = await this.institucionService.getById(idInst)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega las instituciones asociadas a una sola organización'
    })
    @ApiOkResponse({
        description: 'Lista de instituciones asociadas a la organizacion solicitada',
        type: [Institucion]
    })
    @ApiBadRequestResponse({
        description: 'ID ingresada erronea ',
    })
    @ApiNotFoundResponse({
        description: 'No hay instituciones asociadas a la organizacion solicitada',
    })
    @Get('filtrar/org/:id')
    async getByOrg(@Param('id',ParseIntPipe) idOrg:number){
        const data = await this.institucionService.getByOrg(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega las instituciones asociadas a una sola organización según su estado'
    })
    @ApiOkResponse({
        description: 'Lista de instituciones asociadas a la organizacion solicitada',
        type: [Institucion]
    })
    @ApiBadRequestResponse({
        description: 'ID ingresada erronea, estado ingresado erroneo',
    })
    @ApiNotFoundResponse({
        description: 'No hay instituciones asociadas a la organizacion solicitada con el estado indicado'
    })
    @Get('filtrar/org/:id/estado/:st')
    async getByOrgBySt(@Param('id',ParseIntPipe) idOrg:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.institucionService.getByOrgBySt(idOrg,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* POST */

    @ApiOperation({
        summary: 'Agrega nuevas instituciones a la base de datos'
    })
    @ApiOkResponse({
        description: 'Institucion nueva',
        type: Institucion
    })
    @ApiBadRequestResponse({
        description: 'Datos erroneos',
    })
    @Post('add')
    async addOne(@Body() crearDTO:CreateInstitucionDTO){
        const data = await this.institucionService.createOne(crearDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Edita los datos de una institucion'
    })
    @ApiOkResponse({
        description: 'Institucion editada',
        type: Institucion
    })
    @ApiBadRequestResponse({
        description: 'Datos erroneos',
    })
    @ApiNotFoundResponse({
        description: 'Institucion no encontrada'
    })
    @Put('/edit/:id')
    async editOne(@Param('id',ParseIntPipe) idInst:number,@Body() editDTO: EditInstitucionDTO){
        const data = await this.institucionService.editOne(idInst,editDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Elimina una insritucion'
    })
    @ApiOkResponse({
        description: 'Institucion eliminada',
        status: 200,
        type: Institucion
    })
    @ApiNotFoundResponse({
        description: 'Institucion no encontrada'
    })
    @Delete('/delete/:id')
    deleteOne(@Param('id',ParseIntPipe) idInst:number){
        const data = this.institucionService.deleteOne(idInst)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    

}
