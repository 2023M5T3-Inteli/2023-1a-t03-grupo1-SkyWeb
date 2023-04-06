import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { ServiceUpdateApprovalProject } from './app.service';
import { DTOBodyApprovalProject } from './DTO/DTOBodyApprovalProject';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Owner')
@UseGuards(AuthGuard('jwt'))
export class ControllerApprovalProject {
    constructor(
        private serviceUpdateApprovalProject: ServiceUpdateApprovalProject,
    ) {}

    @Put('approvalProject')
    @ApiOperation({ summary: 'Choice if project is accept or denied' })
    @ApiResponse({
        status: 200,

        description:
            '[{"id": 1,"name": "projeto 1","description": "lorem lorem lorem lorem lorem lorem lorem","aplicationDeadLine": "2023-08-19T03:00:00.000Z","duration": "5 semanas","status": "Open","dateStart": "2023-08-27T03:00:00.000Z","isApproved": true,"idUser": 4,"idManager": 1,}]',
    })
    @ApiResponse({
        status: 400,
        description: 'idManager is required',
    })

    // TODO fazer Api response para sucess e faild
    async approvalProject(@Body() body: DTOBodyApprovalProject) {
        const { idManager, idProject, isApproved } = body;

        const result = await this.serviceUpdateApprovalProject.execute(
            idManager,
            idProject,
            isApproved,
        );

        return result;
    }
}
