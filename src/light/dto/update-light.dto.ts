import { PartialType } from '@nestjs/swagger';
import { CreateLightDto } from './create-light.dto';

export class UpdateLightDto extends PartialType(CreateLightDto) {}
