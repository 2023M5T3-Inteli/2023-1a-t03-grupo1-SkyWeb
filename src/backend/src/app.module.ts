import { ServiceAcceptApplyUser } from 'src/services/serviceAcceptApplyUser.service';
import { Module } from '@nestjs/common';

import { ModelDelete } from './models/modelDelete';
import { ModelCreate } from './models/modelCreate';
import { ModelUpdate } from './models/modelsUpdate';
import { ModelSelect } from './models/modelSelect';

import { PutController } from './controller/put.controller';
import { DeleteController } from './controller/delete.controller';
import { PostController } from './controller/post.controller';
import { GetController } from './controller/get.controller';

import { PrismaService } from './prismaServices/prisma.service';
import { ServiceCreateProject } from './services/serviceCreateProject.service';
import { ServiceUpdateApprovalProject } from './services/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from './services/serviceUpdateProjectStatus.service';
import { ServicesDeleteProject } from './services/serviceDeleteProject.service';
import { ServiceGetApplayedUser } from './services/serviceGetApplayedUsers.service';
import { ServiceGetProjectsByUserId } from './services/serviceGetAllProjectsCreatedByMe.service';

@Module({
    imports: [],
    controllers: [
        PutController,
        DeleteController,
        PostController,
        GetController,
    ],
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
        ServiceGetApplayedUser,
        ServiceGetProjectsByUserId,
        ServiceAcceptApplyUser,
    ],
})
export class AppModule { }
