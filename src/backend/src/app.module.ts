import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ModelUpdate } from "./Employee/models/modelsUpdate";
import {ControllerUpdateApprovalProject} from "./Employee/controller/ApprovalProject.controller";
import { ServiceUpdateApprovalProject } from "./Employee/useCases/serviceUpdateApprovalProject.service"



@Module({
    imports: [],
    controllers: [AppController,ControllerUpdateApprovalProject],
    providers: [PrismaService, ModelDelete, AppService,ModelUpdate,ServiceUpdateApprovalProject],
})
export class AppModule {}
