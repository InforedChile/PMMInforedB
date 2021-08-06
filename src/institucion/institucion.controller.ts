import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateDTO } from './dto';
import { InstitucionService } from './institucion.service';

@Controller('inst')
export class InstitucionController {
    constructor(
        private readonly institucionService: InstitucionService
    ){}

    @Get()
    async getMany(){
        const data = await this.institucionService.getMany()
        return {
            data
        }

    }

    @Get(':id')
    async getOne(@Param('id',ParseIntPipe) idInst:number){
        const data = await this.institucionService.getOne(idInst)
        return{
            data
        } 
    }

    @Post()
    async createOne(@Body() dto: CreateDTO){
        const data = await this.institucionService.createOne(dto)
        return{
            data 
        }
    }

}
