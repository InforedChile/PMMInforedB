import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator"
import { BOOL } from "src/enums"

export class CreatePlantillaDTO{

    @ApiProperty({
        description: 'Id de la organizacion asociada'
    })
    @IsNumber()
    @Min(1)
    id_organizacion: number

    @ApiProperty({
        description: 'Nombre de la plantilla',
        maxLength: 100
    })
    @IsString()
    @MaxLength(100)
    @MinLength(1)
    nombre_plantilla: string

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vnombre: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vrut: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vdepto: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    varea: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vsub_area: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vdireccion: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vcorreo: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vtelefono: BOOL

    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    vcargo: BOOL
}