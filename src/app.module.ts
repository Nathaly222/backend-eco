import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LightModule } from './light/light.module';

@Module({
  imports: [PrismaModule, LightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
