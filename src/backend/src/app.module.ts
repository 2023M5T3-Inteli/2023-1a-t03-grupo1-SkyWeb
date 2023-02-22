import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ModelUpdate } from "./Employee/models/modelsUpdate";
import { ControllerUpdateProjectStatus } from "./Employee/controller/controllerUpdateProjectStatus.controller"
import { ServiceUpdateProjectStatus } from "./Employee/useCases/serviceUpdateProjectStatus.service"



@Module({
    imports: [],
    controllers: [AppController, ControllerUpdateProjectStatus],
    providers: [PrismaService, ModelDelete, AppService, ModelUpdate, ServiceUpdateProjectStatus],
})
export class AppModule {}
