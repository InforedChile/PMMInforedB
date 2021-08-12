import { ParseEnumPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ST } from 'src/enums';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities';

@ApiTags('Categoria')
@Controller('cat')
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService){}

    @ApiResponse({
        status: 200,
        description: 'Lista de categorias entregadas correctamente',
        type: [Categoria]
    })
    @ApiResponse({
        status: 404,
        description: 'No hay categorias registradas',
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    @Get()
    async getCategorias():Promise<Categoria[]>{
        return await this.categoriaService.getCategorias()
    }

    @ApiResponse({
        status: 200,
        description: 'Lista de categorias entregadas correctamente',
        type: [Categoria]
    })
    @ApiResponse({
        status: 400,
        description: 'Enum entregado no es valido',
    })
    @ApiResponse({
        status: 404,
        description: 'No se encontraron categorias (activas/inactivas)',
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    @Get('/filtrar/st/:st')
    async getActivos(@Param('st',new ParseEnumPipe(ST)) stCategoria:ST):Promise<Categoria[]>{
        return await this.categoriaService.getByST(stCategoria)        
    }

    @ApiResponse({
        status: 200,
        description: 'Categoria encontrada correctamente',
        type: Categoria
    })
    @ApiResponse({
        status: 400,
        description: 'Id entregada no es valida'
    })
    @ApiResponse({
        status: 404,
        description: 'No se encontro categoria',
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error',
    })
    @Get('/ver/:id')
    async getById(@Param('id',ParseIntPipe) idCategoria: number):Promise<Categoria>{
        return await this.categoriaService.getById(idCategoria)
    }

    

        
}
