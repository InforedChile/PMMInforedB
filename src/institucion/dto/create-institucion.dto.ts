import { IsDate, IsEmail, IsEnum, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";
import { BOOL, ST } from "src/enums";
;

export class CreateDTO{
    @IsNumber()
    id_usuario: number;

    @IsNumber()
    id_publico_cate_sub: number;

    @IsNumber()
    id_ciudad: number;

    @IsString()
    @MaxLength(300)
    titulo_institucion: string;

    @IsString()
    descripcion: string;

    @IsString()
    @MaxLength(300)
    tags: string;

    @IsString()
    @MaxLength(200)
    direccion: string;

    @IsString()
    @MaxLength(300)
    resumen: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    precio1: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    precio2: number;

    @IsString()
    google_maps: string;

    @IsString()
    latitud: string;

    @IsString()
    longitud: string;

    @IsString()
    web: string;

    @IsString()
    video: string;

    
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    telefono1: string;
    
    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    telefono2: string;
// ver validacion email
    @IsString()
    @MinLength(1)
    email1: string;

    @IsOptional()
    @IsString()
    @MinLength(1)
    email2: string;

    @IsString()
    @MaxLength(200)
    horario_atencion: string;

    //??
    @IsEnum(BOOL)
    geoposicion: BOOL;

    //NO
    @IsEnum(BOOL)
    destacar: BOOL;

    @IsString()
    @MaxLength(200)
    twitter: string;

    @IsString()
    @MaxLength(200)
    facebook: string;
    
    // Auntomatico
    @IsEnum(ST)
    st_institucion: ST;

    @IsNumber()
    id_organizacion: number;

    @IsNumber()
    id_plantilla: number;

    // Automatico
    @IsNumber()
    @Min(0)
    errores: number;

}