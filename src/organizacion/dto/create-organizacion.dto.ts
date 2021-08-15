import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateOrgDTO{

    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    @IsOptional()
    ubicacion: string;

    @ApiProperty()
    @IsString()
    @MaxLength(500)
    @IsOptional()
    descripcion: string;

    @ApiProperty()
    @IsEmail()
    correo1: string;


    @ApiProperty()
    @IsEmail()
    @IsOptional()
    correo2: string;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    telefono1: string;

    @ApiProperty()
    @IsString()
    @MaxLength(50)
    @IsOptional()
    telefono2: string;

    /* password: string */

    @ApiProperty()
    @IsInt()
    @IsOptional()
    id_publico_cate: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    id_publico_cate_sub: number;

}