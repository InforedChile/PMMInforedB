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
        return await this.subcategoriaService.getMany()
    }

    @ApiResponse({
        type: Subcategoria
    })
    @Get('ver/:id')
    async getById(@Param('id',ParseIntPipe) idSub:number){
        return await this.subcategoriaService.getOne(idSub)
    }

    @Get('filtrar/cate/:idCate')
    async getByCate(@Param('idCate',ParseIntPipe) idCate:number){
        return await this.subcategoriaService.getByCate(idCate)
    }

    @Get('filtrar/cate/:idCate/estado/:st')
    async getByCateBySt(@Param('idCate',ParseIntPipe) idCate:number,@Param('st',new ParseEnumPipe(ST)) st:ST){
        return await this.subcategoriaService.getByCateByST(idCate,st)
    }

    @Post('add')
    async addSubCate(@Body() subcateDTO: CreateSubcategoriaDTO){
        return await this.subcategoriaService.addSubcategoria(subcateDTO)
    }

    @Put('edit/:id')
    async editSubCate(@Param('id',ParseIntPipe)idSubCate: number, @Body() subcateDTO:EditSubcategoriaDTO){
        return await this.subcategoriaService.ediSubcategoria(idSubCate,subcateDTO)
    }

    @Delete('delete/:id')
    async deleteSubCate(@Param('id',ParseIntPipe)idSubCate: number){
        return await this.subcategoriaService.deleteSubcategoria(idSubCate)
    }
}