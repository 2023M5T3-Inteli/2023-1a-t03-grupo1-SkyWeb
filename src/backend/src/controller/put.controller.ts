// ALL PUT's here
import { Controller, Put, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ServiceUpdateApprovalProject } from '../services/serviceUpdateApprovalProject.service';
import { ServiceUpdateProjectStatus } from '../services/serviceUpdateProjectStatus.service';

import { DTOBodyApprovalProject } from '../DTOs/DTOBodyApprovalProject';
import { DTOBodyUpdateProjectStatus } from '../DTOs/DTOBodyUpdateProjectStatus';

@Controller('put')
@ApiTags('Puts')
export class PutController {
    constructor(
        private readonly serviceUpdateApprovalProject: ServiceUpdateApprovalProject,
        private readonly serviceUpdateProjectStatus: ServiceUpdateProjectStatus,
    ) {}

    @Put('approvalProject')
    @ApiOperation({ summary: 'Choice if project is accept or denied' })
    // TODO fazer Api response para sucess e faild
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
    @ApiOperation({ summary: 'Update status project ' })
    // TODO fazer Api response para sucess e faild
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
