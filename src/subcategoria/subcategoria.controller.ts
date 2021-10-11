import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CreateSubcategoriaDTO, EditSubcategoriaDTO } from './dto';
import { Subcategoria } from './entities';
import { SubcategoriaService } from './subcategoria.service';

@ApiTags('Subcategoria')
@Controller('subcategoria')
export class SubcategoriaController {
    constructor(
        private readonly subcategoriaService: SubcategoriaService
    ){}

    /* GET */
    @ApiOperation({
        summary: 'Entrega lista de subcategorias'
    })
    @ApiOkResponse({
        description:'Lista de subcategorias encontradas',
        type: [Subcategoria]
    })
    @ApiNotFoundResponse({
        description:'No hay subcategorias registradas'
    })
    @Get()
    async getMany(){
        const data = await this.subcategoriaService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega subcategoria seleccionada'
    })
    @ApiOkResponse({
        description:'Subcategoria seleccionada por su id',
        type: Subcategoria
    })
    @ApiBadRequestResponse({
        description: 'Id ingresada en formato invalido'
    })
    @ApiNotFoundResponse({
        description: 'Subcategoria no encontrada'
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idSub:number){
        const data = await this.subcategoriaService.getOne(idSub)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega lista de subcategorias segun id de categoria'
    })
    @ApiOkResponse({
        description:'Lista de subcategorias, segun su categoria',
        type:[Subcategoria]
    })
    @ApiNotFoundResponse({
        description:'No hay subcategorias registradas en esa categoria'
    })
    @ApiBadRequestResponse({
        description: 'Id de categoria invalida'
    })
    @Get('filtrar/cate/:idCate')
    async getByCate(@Param('idCate',ParseIntPipe) idCate:number){
        const data = await this.subcategoriaService.getByCate(idCate)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiOperation({
        summary: 'Entrega lista de subcategorias segun id categoria y su estado '
    })
    @ApiOkResponse({
        description:'Lista de subcategorias segun su categoria y su estado',
        type: Subcategoria
    })
    @ApiNotFoundResponse({
        description: 'No hay subcategorias asociadas a los datos ingresados'
    })
    @ApiBadRequestResponse({
        description: 'Parametro ingresado erroneo'
    })
    @Get('filtrar/cate/:idCate/estado/:st')
    async getByCateBySt(@Param('idCate',ParseIntPipe) idCate:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.subcategoriaService.getByCateByST(idCate,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
    
    /* POST */

    @ApiOperation({
        summary: 'Crea una subcategoria'
    })
    @ApiCreatedResponse({
        description: 'Subcategoria registada correctamente',
        type: Subcategoria
    })
    @ApiBadRequestResponse({
        description: 'Parametro ingresado erroneo'
    })
    @Post('add')
    async addSubCate(@Body() subcateDTO: CreateSubcategoriaDTO){
        const data = await this.subcategoriaService.addSubcategoria(subcateDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* PUT */
    @ApiOperation({
        summary: 'Edita una subcategoria'
    })
    @ApiOkResponse({
        description: 'Subcategoria editada correctamente',
        type: Subcategoria
    })
    @ApiBadRequestResponse({
        description: 'Parametros ingresados erroneos'
    })
    @ApiNotFoundResponse({
        description: 'Subcategoria no encontrada'
    })
    @Put('edit/:id')
    async editSubCate(@Param('id',ParseIntPipe)idSubCate: number, @Body() subcateDTO:EditSubcategoriaDTO){
        const data = await this.subcategoriaService.ediSubcategoria(idSubCate,subcateDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    /* Delete  */
    @ApiOperation({
        summary: 'Borra una subcategoria'
    })
    @ApiOkResponse({
        description: 'Subcategoria eliminada'
    })
    @ApiBadRequestResponse({
        description: 'Id ingresada erroneamente'
    })
    @ApiNotFoundResponse({
        description: 'Subcategoria no encontrada'
    })
    @Delete('delete/:id')
    async deleteSubCate(@Param('id',ParseIntPipe)idSubCate: number){
        const data = await this.subcategoriaService.deleteSubcategoria(idSubCate)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
}