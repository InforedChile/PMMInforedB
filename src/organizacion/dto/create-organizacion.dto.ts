import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateOrgDTO{

    @ApiProperty({
        description: 'Nombre organización',
        nullable: false,
        maxLength: 50
    })
    @IsString()
    @MaxLength(50)
    @MinLength(1)
    nombre: string;

    @ApiProperty({
        description: 'Ubicación de la organización',
        nullable: true,
        maxLength: 200
    })
    @IsString()
    @MaxLength(200)
    @IsOptional()
    ubicacion: string;

    @ApiProperty({
        description: 'Descripción de la organizacón',
        nullable: true,
        maxLength: 200
    })
    @IsString()
    @MaxLength(500)
    @IsOptional()
    descripcion: string;

    @ApiProperty({
        description:'Correo electronico',
        maxLength: 50,
        nullable: false,
    })
    @IsEmail()
    @MaxLength(50)
    @MinLength(1)
    correo1: string;


    @ApiProperty({
        description: 'Correo Electrónico',
        nullable: true,
        maxLength: 50
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(50)
    correo2: string;

    @ApiProperty({
        description: 'Telefono de contacto',
        nullable: false,
        maxLength: 50
    })
    @IsString()
    @MaxLength(50)
    @MinLength(1)
    telefono1: string;

    @ApiProperty({
        description: 'Telefono de contacto',
        nullable: true,
        maxLength: 50
    })
    @IsString()
    @MaxLength(50)
    @IsOptional()
    telefono2: string;

    /* password: string */

    @ApiProperty({
        description: 'Categoria principal'
    })
    @IsInt()
    @IsOptional()
    id_publico_cate: number;

    @ApiProperty({
        description: 'Subcategoria Principal'
    })
    @IsInt()
    @IsOptional()
    id_publico_cate_sub: number;

}