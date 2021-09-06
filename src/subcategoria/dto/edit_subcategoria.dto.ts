import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { ST } from "src/enums";
import { CreateSubcategoriaDTO } from "./create_subcategoria.dto";

export class EditSubcategoriaDTO extends PartialType(CreateSubcategoriaDTO){
    
    @ApiProperty()
    @IsEnum(ST)
    @IsOptional()
    st_publico_cate_sub: ST;

}