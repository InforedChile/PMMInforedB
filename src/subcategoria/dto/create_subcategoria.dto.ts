import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateSubcategoriaDTO {

    @ApiProperty()
    @IsNumber()
    id_publico_cate: number;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    nombre_publico_cate_sub: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    imagen: string;

}