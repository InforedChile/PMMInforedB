import { ParseEnumPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities';

@ApiTags('Categoria')
@Controller('cat')
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService){}

    @ApiOperation({
        summary: 'Enlista categorias registradas del sistema'
    })
    @ApiOkResponse({
        description: 'Lista de categorias entregadas correctamente',
        type: [Categoria]
    })
    @ApiNotFoundResponse({
        description: 'No hay categorias registradas',
    })
    @Get()
    async getCategorias(){
        const data = await this.categoriaService.getCategorias()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }
    
    @ApiOperation({
        summary: `Filtra las categorias segun el criterio de st = "${ST.ACTIVO}" o "${ST.INACTIVO}"`
    })
    @ApiOkResponse({
        description: 'Lista de categorias entregadas correctamente',
        type: [Categoria]
    })
    @ApiBadRequestResponse({
        description: 'Enum entregado no es valido',
    })
    @ApiNotFoundResponse({
        description: 'No se encontraron categorias (activas/inactivas)',
    })
    @Get('/filtrar/st/:st')
    async getActivos(@Param('st',new ParseEnumPipe(ST)) stCategoria:ST){
        const data = await this.categoriaService.getByST(stCategoria)
        return {
            status: 200,
            message: 'OK',
            data: data
        }        
    }

    @ApiOperation({
        summary: 'Entrega los datos de la categoria solicitada a traves de su id'
    })
    @ApiOkResponse({
        description: 'Categoria encontrada correctamente',
        type: Categoria
    })
    @ApiBadRequestResponse({
        description: 'Id entregada no es valida'
    })
    @ApiNotFoundResponse({
        description: 'No se encontro categoria',
    })
    @Get('/ver/:id')
    async getById(@Param('id',ParseIntPipe) idCategoria: number){
        const data = await this.categoriaService.getById(idCategoria)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

  

    

        
}
