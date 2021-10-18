import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { BOOL } from "src/enums";
import { CreateOrgDTO } from "./create-organizacion.dto";

export class EditOrgDTO extends PartialType(CreateOrgDTO){
    @ApiProperty({
        description: 'Indica si la institución esta autorizada o no',
        nullable: true
    })
    @IsEnum(BOOL)
    @IsOptional()
    auth: BOOL;
}