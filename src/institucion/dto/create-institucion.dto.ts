import { IsDate, IsEmail, IsEnum, IsInt, IsString, MaxLength, Min } from "class-validator";
import { BOOL, ST } from "src/enums";
;

export class CreateDTO{
    @IsInt()
    id_usuario: number;

    @IsInt()
    id_publico_cate_sub: number;

    @IsInt()
    id_ciudad: number;

    @IsDate()
    fecha_crea: Date;

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


    @IsInt()
    @Min(0)
    precio1: number;

    @IsInt()
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
    @MaxLength(100)
    telefono1: string;

    @IsString()
    @MaxLength(100)
    telefono2: string;

    @IsEmail()
    email1: string;

    @IsEmail()
    email2: string;

    @IsString()
    @MaxLength(200)
    horario_atencion: string;

    @IsEnum(BOOL)
    geoposicion: BOOL;

    @IsEnum(BOOL)
    destacar: BOOL;

    @IsDate()
    fecha_destacado: Date;

    @IsString()
    @MaxLength(200)
    twitter: string;

    @IsString()
    @MaxLength(200)
    facebook: string;

    @IsEnum(ST)
    st_institucion: ST;

    @IsEnum(ST)
    id_organizacion: number;

    @IsInt()
    id_plantilla: number;

    @IsInt()
    @Min(0)
    errores: number;

}