import { PartialType } from "@nestjs/swagger";
import { CreatePersonaDTO } from "./create_persona.dto";

export class EditPersonaDTO extends PartialType(CreatePersonaDTO){
    
}