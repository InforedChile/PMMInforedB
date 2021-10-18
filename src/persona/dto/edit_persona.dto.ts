import { OmitType, PartialType } from "@nestjs/swagger";
import { CreatePersonaDTO } from "./create_persona.dto";

export class EditPersonaDTO extends PartialType(
    OmitType(CreatePersonaDTO,['id_organizacion','rut','nombre'] as const)
    ){
    
}