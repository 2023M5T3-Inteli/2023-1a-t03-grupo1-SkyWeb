import { Body, Controller, Post } from '@nestjs/common';

import { DTOBodyApplyProject } from './DTO/DtoApplyProject';
import { ServiceApplyProject } from './app.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller()
@ApiTags('User')
export class ControllerApplyProject {
    constructor(private readonly serviceApplyProject: ServiceApplyProject) { }

    @Post('applyProject')
    @ApiOperation({ summary: 'Apply for a project' })
    @ApiResponse({
        status: 201,
        description:
            '[{idUser:number,idProject:number,idRole:number}]',
    })
    @ApiResponse({
        status: 300,
        description:
            'Ambigous id in user, project or role',
    })
    @ApiResponse({
        status: 404,
        description:
            'User, project or role does not exist',
    })

    async applyProject(@Body() body: DTOBodyApplyProject) {
        const { idProject, idRole, idUser } = body
        const result = await this.serviceApplyProject.execute(idProject, idUser, idRole);
        return result;
    }
}