import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Persona')
@Controller('dir')
export class PersonaController {}
