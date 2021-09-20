import { Body, Controller, Delete, Get, Param, ParseEnumPipe, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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

    @Get()
    async getMany(){
        const data = await this.subcategoriaService.getMany()
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @ApiResponse({
        type: Subcategoria
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

    @Get('filtrar/cate/:idCate')
    async getByCate(@Param('idCate',ParseIntPipe) idCate:number){
        const data = await this.subcategoriaService.getByCate(idCate)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Get('filtrar/cate/:idCate/estado/:st')
    async getByCateBySt(@Param('idCate',ParseIntPipe) idCate:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        const data = await this.subcategoriaService.getByCateByST(idCate,st)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Post('add')
    async addSubCate(@Body() subcateDTO: CreateSubcategoriaDTO){
        const data = await this.subcategoriaService.addSubcategoria(subcateDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

    @Put('edit/:id')
    async editSubCate(@Param('id',ParseIntPipe)idSubCate: number, @Body() subcateDTO:EditSubcategoriaDTO){
        const data = await this.subcategoriaService.ediSubcategoria(idSubCate,subcateDTO)
        return {
            status: 200,
            message: 'OK',
            data: data
        }
    }

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