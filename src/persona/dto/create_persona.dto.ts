import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ST } from "src/enums";

export class CreatePersonaDTO{


    @ApiProperty({
        description: 'id de la organizacion asociada ',
        type: 'int',
    })
    @IsNumber()
    id_organizacion: number;

    @ApiProperty({
        description: 'Identificador de la institucion asociada',
        type: 'int',
        nullable: true,
    })
    @IsNumber()
    @IsOptional()
    id_institucion: number;

    @ApiProperty({
        description: 'Nombre completo de la persona',
        nullable: false,
        maxLength: 50
    })
    @IsString()
    @MaxLength(50)
    @MinLength(1)
    nombre: string

    @ApiProperty({
        description: 'Run de la persona',
        nullable: false,
        maxLength: 20
    })
    @IsString()
    @MaxLength(20)
    @MinLength(1)
    rut: string

    @ApiProperty({
        description: 'Departamento al que pertenece la persona',
        nullable: true,
        maxLength: 15
    })
    @IsString()
    @IsOptional()
    @MaxLength(15)
    departamento: string

    @ApiProperty({
        description: 'Area al que pertenece la persona',
        nullable: true,
        maxLength: 20
    })
    @IsString()
    @IsOptional()
    @MaxLength(20)
    area: string

    @ApiProperty({
        description: 'Sub area a la que pertenece',
        nullable: true,
        maxLength: 20,
    })
    @IsString()
    @IsOptional()
    @MaxLength(20)
    sub_area: string

    @ApiProperty({
        description: 'Direccion laboral/ oficina',
        nullable: true,
        maxLength: 50
    })
    @IsString()
    @IsOptional()
    @MaxLength(50)
    direccion: string

    @ApiProperty({
        description: 'Correo Electrónico',
        nullable: true,
        maxLength: 50
    })
    @IsEmail()
    @IsOptional()
    @MaxLength(50)
    correo: string

    @ApiProperty({
        description: 'Telefono de contacto',
        nullable: true,
        maxLength: 20
    })
    @IsString()
    @IsOptional()
    @MaxLength(20)
    telefono: string

    @ApiProperty({
        description: 'Cargo que ocupa',
        nullable: true,
        maxLength: 50
    })
    @IsString()
    @IsOptional()
    @MaxLength(50)
    cargo: string

    @ApiProperty({
        description: 'Indica si la persona debe ser visible o no',
        enum: ST,
        nullable: true,
        example: ST.INACTIVO
    })
    @IsEnum(ST)
    @IsOptional()
    st_persona:ST
    
}