import { Module } from '@nestjs/common';

import { ModelDelete } from './models/modelDelete';
import { ModelCreate } from './models/modelCreate';
import { ModelUpdate } from './models/modelsUpdate';
import { ModelSelect } from './models/modelSelect';

import { PutController } from './controller/put.controller';
import { DeleteController } from './controller/delete.controller';
import { PostController } from './controller/post.controller';

import { PrismaService } from './prismaServices/prisma.service';
import { ServiceCreateProject } from './useCases/serviceCreateProject.service';
import { ServiceUpdateApprovalProject } from './useCases/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from './useCases/serviceUpdateProjectStatus.service';
import { ServicesDeleteProject } from './useCases/serviceDeleteProject.service';
import { ServiceApplyProject } from './useCases/serviceApplyProject.service';

@Module({
    imports: [],
    controllers: [PutController, DeleteController, PostController],
    providers: [
        ModelSelect,
        ModelUpdate,
        ModelDelete,
        ModelCreate,
        PrismaService,
        ServiceCreateProject,
        ServicesDeleteProject,
        ServiceUpdateProjectStatus,
        ServiceUpdateApprovalProject,
        ServiceApplyProject
    ],
})
export class AppModule { }
