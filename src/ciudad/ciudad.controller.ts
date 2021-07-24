import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('ciudad')
export class CiudadController {
    
    @Get()
    async getMany(){
        return "No Habilitado"
    }

    @Get(':id')
    async getCity(@Param('id',ParseIntPipe) idCity){
        return "No Habilitado"
    }

    @Get('/region/:id')
    async getByRegion(@Param('id') idRegion){
        return "No Habilitado"
    }

    @Post()
    async addCity(){
        return "No Habilitado"
    }

    @Put()
    async editCity(){
        return "No Habilitado"
    }

    @Delete()
    async deleteCity(){
        return "No Habilitado"
    }



}
