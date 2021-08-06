import { Body, Controller, Delete, Get, Param, ParseArrayPipe, Post, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService){}

    @Get()
    async getCategorias(){
        return await this.categoriaService.getCategorias()
    }

    @Get(':id')
    async getById(@Param('id',ParseArrayPipe) idCategoria){
        const data= await this.categoriaService.getById(idCategoria)
        if(!data){
            return {
                statusCode: 400,
                message: "Categoria no encontrada",
                error: "bad Request"
            }
        }
        return data
    }

    @Post()
    async addCategoria(@Body() createDTO){
        return "No Implementado"
    }

    @Put()
    async editCategoria(){
        return "No Implementado"
    }

    @Delete()
    async deleteCategoria(){
        return "No Implementado"
    }
}
