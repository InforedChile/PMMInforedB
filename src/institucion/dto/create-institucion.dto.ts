import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsEnum, IsInt, IsNumber, IsOptional, IsString, IsUrl, MaxLength, Min, MinLength } from "class-validator";
import { BOOL, ST } from "src/enums";
;

export class CreateInstitucionDTO{
    @ApiProperty({
        description: 'Id del usuario'
    })
    @IsNumber()
    @IsOptional()
    id_usuario: number;

    @ApiProperty({
        description: 'Subcategoria de la institución'
    })
    @IsNumber()
    @Min(1)
    id_publico_cate_sub: number;

    @ApiProperty({
        description: 'Id ciudad institución'
    })
    @IsNumber()
    @Min(1)
    id_ciudad: number;

    @ApiProperty({
        description: 'Titulo institución',
        maxLength: 300,
        nullable: false
    })
    @IsString()
    @MaxLength(300)
    @MinLength(1)
    titulo_institucion: string;

    @ApiProperty({
        description: 'Descripción de la institución',
        nullable: false
    })
    @IsString()
    descripcion: string;

    @ApiProperty({
        description: 'Tags de busqueda',
        nullable: true,
        maxLength: 300
    })
    @IsString()
    @IsOptional()
    @MaxLength(300)
    tags: string;

    @ApiProperty({
        description: 'Dirección de la institución',
        maxLength: 200,
        nullable: true
    })
    @IsString()
    @IsOptional()
    @MaxLength(200)
    direccion: string;

    @ApiProperty({
        description: 'Resumen de la institución',
        maxLength: 200,
        nullable: false
    })
    @IsString()
    @MaxLength(300)
    @MinLength(1)
    resumen: string;

    @ApiProperty({
        description: 'Precio',
        nullable: true,
        minimum: 0
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    precio1: number;

    @ApiProperty({
        description: 'Precio',
        nullable: true,
        minimum: 0
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    precio2: number;

    @ApiProperty({
        description: '?',
        nullable: true
    })
    @IsString()
    @IsOptional()
    google_maps: string;

    @ApiProperty({
        description: 'Latitud geografica',
        nullable: true 
    })
    @IsString()
    @IsOptional()
    latitud: string;

    @ApiProperty({
        description: 'Longitud Geografica',
        nullable: true
    })
    @IsString()
    @IsOptional()
    longitud: string;

    @ApiProperty({
        description: 'Pagina Web',
        nullable: true,
        maxLength: 150
    })
    @IsUrl()
    @IsOptional()
    @MaxLength(150)
    web: string;

    @ApiProperty({
        description: 'Video promoción',
        nullable: true,
        maxLength: 200

    })
    @IsUrl()
    @IsOptional()
    @MaxLength(200)
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

    @ApiProperty({
        description: 'Correo 1',
        nullable: false,
        maxLength: 255
    })
    @IsString()
    @IsEmail()
    @MaxLength(255)
    email1: string;

    @ApiProperty({
        description: 'Correo 2',
        nullable: true,
        maxLength: 50
    })
    @IsOptional()
    @IsEmail()
    @MaxLength(50)
    email2: string;

    @ApiProperty({
        description: ' Horario atención',
        nullable: false,
        maxLength: 200
    })
    @IsString()
    @MaxLength(200)
    @MinLength(1)
    horario_atencion: string;

    //??
    @ApiProperty({
        description: 'Indica si esta activa la geoposición',
        nullable: true,
        enum: BOOL,
        example: BOOL.NO
    })
    @IsEnum(BOOL)
    @IsOptional()
    geoposicion: BOOL;    

    @ApiProperty({
        description: 'Red Social Twitter'
    })
    @IsUrl()
    @MaxLength(200)
    @IsOptional()
    twitter: string;

    @ApiProperty({
        description: 'Red Social Facebook'
    })
    @IsUrl()
    @MaxLength(200)
    @IsOptional()
    facebook: string;
    
    @ApiProperty({
        description: 'Organización encargada',
        nullable: false
    })
    @IsNumber()
    @Min(1)
    id_organizacion: number;

    @ApiProperty({
        description: 'Plantilla de visualización de personas ',
        nullable: true
    })
    @IsOptional()
    @IsNumber()
    @Min(1)  
    id_plantilla: number;
}