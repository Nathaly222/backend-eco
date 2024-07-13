import { Module } from '@nestjs/common';
import { LightService } from './light.service';
import { LightController } from './light.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LightController],
  providers: [LightService],
  imports: [PrismaModule],
})
export class LightModule {}
