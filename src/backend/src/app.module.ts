import { Module } from '@nestjs/common';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ControllerCreateProject } from './Employee/controller/controllerCreateProject.controller';
import { ModelCreate } from './Employee/models/modelCreate';
import { ServiceCreateProject } from './Employee/useCases/serviceCreateProject.service';
import { ModelUpdate } from './Employee/models/modelsUpdate';
import { ServiceUpdateApprovalProject } from './Employee/useCases/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from './Employee/useCases/serviceUpdateProjectStatus.service';
import { ServicesDeleteProject } from './Employee/useCases/serviceDeleteProject.service';
import { ModelSelect } from './Employee/models/modelSelect';
import { PutController } from './Employee/controller/put.controller';
import { DeleteController } from './Employee/controller/delete.controller';

@Module({
    imports: [],
    controllers: [PutController, DeleteController, ControllerCreateProject],
    providers: [
        PrismaService,
        ModelSelect,
        ModelUpdate,
        ModelDelete,
        ModelCreate,
        ServiceCreateProject,
        ServicesDeleteProject,
        ServiceUpdateProjectStatus,
        ServiceUpdateApprovalProject,
    ],
})
export class AppModule {}
