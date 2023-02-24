// ALL PUT's here
import { Controller, Put, Body } from '@nestjs/common';

import { ServiceUpdateApprovalProject } from '../useCases/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from '../useCases/serviceUpdateProjectStatus.service';

import { DTOBodyApprovalProject } from '../DTOs/DTOBodyApprovalProject';
import { DTOBodyUpdateProjectStatus } from '../DTOs/DTOBodyUpdateProjectStatus';

@Controller('put')
export class PutController {
    constructor(
        private readonly serviceUpdateApprovalProject: ServiceUpdateApprovalProject,
        private readonly serviceUpdateProjectStatus: ServiceUpdateProjectStatus,
    ) {}

    @Put('approvalProject')
    async approvalProject(@Body() body: DTOBodyApprovalProject) {
        const { idManager, idProject, isAproved } = body;

        const result = await this.serviceUpdateApprovalProject.execute(
            idManager,
            idProject,
            isAproved,
        );

        return result;
    }

    @Put('updateStatusProject')
    async updateStatusProject(@Body() body: DTOBodyUpdateProjectStatus) {
        const { idLeader, idProject, progress } = body;

        const result = await this.serviceUpdateProjectStatus.execute(
            idLeader,
            idProject,
            progress,
        );

        return result;
    }
}
