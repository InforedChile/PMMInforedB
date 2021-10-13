import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePlantillaDTO, EditPlantillaDTO } from './dto';
import { Plantilla } from './entities/plantilla.entity';
import { PlantillaService } from './plantilla.service';

@ApiTags('Plantilla')
@Controller('plantilla')
export class PlantillaController {
    constructor(
        private readonly plantillaService: PlantillaService
    ){}
    /* GET */

    @ApiOperation({
        summary: 'Entrega todas las plantillas registradas'
    })
    @ApiOkResponse({
        description: 'Lista de plantillas',
        type: [Plantilla]
    })
    @ApiNotFoundResponse({
        description: 'No hay plantillas registradas'
    })
    @Get('')
    async getMany(){
        const data = await this.plantillaService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega la plantilla seleccionada por su id'
    })
    @ApiOkResponse({
        description: 'Plantilla seleccionada',
        type: Plantilla
    })
    @ApiNotFoundResponse({
        description: 'Plantilla no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Id ingresada en formato erroneo'
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idPlantilla: number){
        const data = await this.plantillaService.getOne(idPlantilla)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega las plantillas asociadas a una organizacion'
    })
    @ApiOkResponse({
        description:'Lista de plantillas asociadas a una organización',
        type:[Plantilla]
    })
    @ApiNotFoundResponse({
        description: 'No hay plantillas asociadas a la organización indicada'
    })
    @ApiBadRequestResponse({
        description:'Id ingresada erronea'
    })
    @Get('filtrar/Organizacion/:idOrg')
    async getByOrg(@Param('idOrg',ParseIntPipe) idOrg: number){
        const data = await this.plantillaService.getByOrg(idOrg)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* POST */

    @ApiOperation({
        summary: 'Crea una plantilla',
    })
    @ApiOkResponse({
        description:'Plantilla creada',
        type: Plantilla
    })
    @ApiBadRequestResponse({
        description:'Datos ingresados erroneos'
    })
    @Post('add')
    async addPlantilla(@Body() plantillaDTO: CreatePlantillaDTO){
        const data = await this.plantillaService.addPlantilla(plantillaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary:'Edita una plantilla'
    })
    @ApiOkResponse({
        description:'Plantilla editada',
        type:Plantilla
    })
    @ApiNotFoundResponse({
        description: 'Plantilla no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Datos ingresados no validos'
    })
    @Put('edit/:id')
    async editPlantilla(@Param('id',ParseIntPipe) idPlantilla:number,@Body() plantillaDTO: EditPlantillaDTO){
        const data = await this.plantillaService.editPlantilla(idPlantilla,plantillaDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Elimina una plantilla'
    })
    @ApiOkResponse({
        description: 'Plantilla eliminada'
    })
    @ApiNotFoundResponse({
        description: 'Plantilla no encontrada'
    })
    @ApiBadRequestResponse({
        description: 'Id entregada en formato erroneo'
    })
    @Delete('delete/:id')
    async deletePlantilla(@Param('id',ParseIntPipe) idPlantilla:number){
        const data = await this.plantillaService.deletePlantilla(idPlantilla)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
}
