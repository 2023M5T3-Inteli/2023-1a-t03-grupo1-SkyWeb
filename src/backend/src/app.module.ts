import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ModelUpdate } from "./Employee/models/modelsUpdate";
import {ControllerUpdateApprovalProject} from "./Employee/controller/ApprovalProject.controller";
import { ServiceUpdateApprovalProject } from "./Employee/useCases/serviceUpdateApprovalProject.service"
import { ControllerUpdateProjectStatus } from "./Employee/controller/controllerUpdateProjectStatus.controller"
import { ServiceUpdateProjectStatus } from "./Employee/useCases/serviceUpdateProjectStatus.service"
import { DeleteProjectController } from './Employee/controller/controllerDeleteProject';
import {ServicesDeleteProject} from './Employee/useCases/serviceDeleteProject.service';
import { ModelSelect } from './Employee/models/modelSelect';

@Module({
    imports: [],
    controllers: [AppController,DeleteProjectController,ControllerUpdateProjectStatus,ControllerUpdateApprovalProject],
    providers: [PrismaService, ModelDelete, AppService, ServicesDeleteProject,ModelSelect,ModelUpdate,ServiceUpdateProjectStatus,ServiceUpdateApprovalProject],

})
export class AppModule {}
