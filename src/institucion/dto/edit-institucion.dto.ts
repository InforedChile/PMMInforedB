import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";
import { BOOL, ST } from "src/enums";
import { CreateInstitucionDTO } from "./create-institucion.dto";

export class EditInstitucionDTO extends PartialType(CreateInstitucionDTO){
    
    
    @ApiProperty({
        description: 'Indica si esta activa el destacar',
        nullable: true,
        enum: BOOL,
        example: BOOL.NO
    })
    @IsEnum(BOOL)
    @IsOptional()
    destacar: BOOL;

    @ApiProperty({
        description: 'Fecha en la que termina de destacar',
        nullable: true
    })
    @IsDateString()
    @IsOptional()
    fecha_destacado: Date;
    
    @ApiProperty({
        description: 'Estado de la institución',
        nullable: true
    })
    @IsEnum(ST)
    @IsOptional()
    st_institucion: ST;
    
    @ApiProperty({
        description: 'Errores indicados',
        nullable: true
    })
    @IsNumber()
    @IsOptional()
    @Min(0)
    errores:number;

    @ApiProperty({
        description: 'Observaciones de ultimo momento',
        type: 'varchar',
        maxLength: 500,
        nullable: true
    })
    @IsString()
    @IsOptional()
    @MaxLength(500)
    observaciones: string; // Se agrega

}
