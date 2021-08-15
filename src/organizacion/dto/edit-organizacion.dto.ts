import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { BOOL } from "src/enums";
import { CreateOrgDTO } from "./create-organizacion.dto";

export class EditOrgDTO extends PartialType(CreateOrgDTO){
    @ApiProperty()
    @IsEnum(BOOL)
    @IsOptional()
    auth: BOOL;
}