import { Body, Controller, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceUpdateApprovalProject } from './app.service';
import { DTOBodyApprovalProject } from './DTO/DTOBodyApprovalProject';

@Controller()
@ApiTags('Owner')
export class ControllerApprovalProject {
    constructor(
        private serviceUpdateApprovalProject: ServiceUpdateApprovalProject,
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
}
