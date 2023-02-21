import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [PrismaService, ModelDelete, AppService],
})
export class AppModule {}
