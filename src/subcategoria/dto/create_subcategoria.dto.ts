import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateSubcategoriaDTO {

    @ApiProperty({
        description: 'Numero de la categoria',
        type: 'number',
        nullable: false
    })
    @IsNumber()
    id_publico_cate: number;

    @ApiProperty({
        description: 'Nombre de la subcategoria',
        type: 'string',
        minLength: 1,
        maxLength: 200,
        nullable: false
    })
    @IsString()
    @MaxLength(200)
    @MinLength(1)
    nombre_publico_cate_sub: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    @IsOptional()
    imagen: string;

}