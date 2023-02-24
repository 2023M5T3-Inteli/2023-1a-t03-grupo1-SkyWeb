import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ControllerCreateProject } from './Employee/controller/controllerCreateProject.controller';
import { ModelCreate } from './Employee/models/modelCreate';
import { ServiceCreateProject } from './Employee/useCases/serviceCreateProject.service';

@Module({
    imports: [],
    controllers: [AppController, ControllerCreateProject],
    providers: [PrismaService, ModelDelete, AppService, ModelCreate, ServiceCreateProject],
})
export class AppModule { }
