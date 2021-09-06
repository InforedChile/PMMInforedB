import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
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
    id_institucion: number;

    @ApiProperty()
    @IsString()
    nombre: string

    @ApiProperty()
    @IsString()
    rut: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    departamento: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    area: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    sub_area: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    direccion: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    correo: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    telefono: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    cargo: string

    @ApiProperty()
    @IsEnum(ST)
    @IsOptional()
    st_persona:ST
    
}