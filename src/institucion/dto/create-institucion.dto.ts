import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsEnum, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";
import { BOOL, ST } from "src/enums";
;

export class CreateInstitucionDTO{
    @ApiProperty()
    @IsNumber()
    id_usuario: number;

    @ApiProperty()
    @IsNumber()
    id_publico_cate_sub: number;

    @ApiProperty()
    @IsNumber()
    id_ciudad: number;

    @ApiProperty()
    @IsString()
    @MaxLength(300)
    titulo_institucion: string;

    @ApiProperty()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsString()
    @MaxLength(300)
    tags: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    direccion: string;

    @ApiProperty()
    @IsString()
    @MaxLength(300)
    resumen: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Min(0)
    precio1: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Min(0)
    precio2: number;

    @ApiProperty()
    @IsString()
    google_maps: string;

    @ApiProperty()
    @IsString()
    latitud: string;

    @ApiProperty()
    @IsString()
    longitud: string;

    @ApiProperty()
    @IsString()
    web: string;

    @ApiProperty()
    @IsString()
    video: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    telefono1: string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    telefono2: string;
// ver validacion email

    @ApiProperty()
    @IsString()
    @MinLength(1)
    email1: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(1)
    email2: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    horario_atencion: string;

    //??
    @ApiProperty()
    @IsEnum(BOOL)
    geoposicion: BOOL;

    //NO
    @ApiProperty()
    @IsEnum(BOOL)
    destacar: BOOL;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    twitter: string;

    @ApiProperty()
    @IsString()
    @MaxLength(200)
    facebook: string;
    
    // Auntomatico
    @ApiProperty()
    @IsEnum(ST)
    st_institucion: ST;

    @ApiProperty()
    @IsNumber()
    id_organizacion: number;

    @ApiProperty()
    @IsNumber()
    id_plantilla: number;

    // Automatico
    @ApiProperty()
    @IsNumber()
    @Min(0)
    errores: number;

}