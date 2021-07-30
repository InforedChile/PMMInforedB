import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CiudadService } from './ciudad.service';

@Controller('ciudad')
export class CiudadController {

    constructor( private readonly ciudadService: CiudadService ){}
    @Get()
    async getMany(){
        const data= await this.ciudadService.getCiudades()
        return data
    }

    @Get(':id')
    async getCity(@Param('id',ParseIntPipe) idCiudad){
        const data= await this.ciudadService.getById(idCiudad)
        if(!data){
            return {
                statusCode: 400,
                message: "Ciudad no encontrada",
                error: "bad Request"
            }
        }
        return data
    }

    @Get('/region/:id')
    async getByRegion(@Param('id', ParseIntPipe) idRegion){
        const data = await this.ciudadService.getByRegion(idRegion);
        if(data.length===0){
            return {
                statusCode: 400,
                message: "Id de region no existe",
                error: "bad Request"
            }
        }
        return data
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
