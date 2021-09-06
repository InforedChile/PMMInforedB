import { OmitType, PartialType } from "@nestjs/swagger";
import { CreatePlantillaDTO } from "./create_plantilla.dto";

export class EditPlantillaDTO extends PartialType(
    OmitType(CreatePlantillaDTO,['id_organizacion'] as const ) ){ }