import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEnum, IsNumber, IsOptional, Min } from "class-validator";
import { BOOL, ST } from "src/enums";
import { CreateInstitucionDTO } from "./create-institucion.dto";

export class EditInstitucionDTO extends PartialType(CreateInstitucionDTO){
    
    
    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    destacar: BOOL;

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    fecha_destacado: Date;
    
    @ApiProperty()
    @IsEnum(ST)
    @IsOptional()
    st_institucion: ST;
    
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    @Min(0)
    errores:number;
}