import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLightDto } from './dto/create-light.dto';
import { UpdateLightDto } from './dto/update-light.dto';

@Injectable()
export class LightService {
  constructor(private prisma: PrismaService) {}

  create(createLightDto: CreateLightDto) {
    return this.prisma.consumption.create({
      data: createLightDto,
    });
  }

  findAll() {
    return this.prisma.consumption.findMany();
  }

  findOne(id: number) {
    return this.prisma.consumption.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLightDto: UpdateLightDto) {
    return this.prisma.consumption.update({
      where: { id },
      data: updateLightDto,
    });
  }

  remove(id: number) {
    return this.prisma.consumption.delete({
      where: { id },
    });
  }
}
