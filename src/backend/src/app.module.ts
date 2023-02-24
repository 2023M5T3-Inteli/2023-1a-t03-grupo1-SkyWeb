import { Module } from '@nestjs/common';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { ModelUpdate } from './Employee/models/modelsUpdate';
import { ServiceUpdateApprovalProject } from './Employee/useCases/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from './Employee/useCases/serviceUpdateProjectStatus.service';
import { ServicesDeleteProject } from './Employee/useCases/serviceDeleteProject.service';
import { ModelSelect } from './Employee/models/modelSelect';
import { PutController } from './Employee/controller/put.controller';
import { DeleteController } from './Employee/controller/delete.controller';

@Module({
    imports: [],
    controllers: [PutController, DeleteController],
    providers: [
        PrismaService,
        ModelSelect,
        ModelUpdate,
        ModelDelete,
        ServicesDeleteProject,
        ServiceUpdateProjectStatus,
        ServiceUpdateApprovalProject,
    ],
})
export class AppModule {}
