import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ServiceAcceptApplyUser } from '../services/serviceAcceptApplyUser.service';
import { ServiceCreateProject } from '../services/serviceCreateProject.service';

import { DTOBodyCreateProject } from '../DTOs/DtoCreateProject';
import { DTOBodyAcceptUser } from './../DTOs/DTOBodyAcceptUser';

@Controller('post')
@ApiTags('Posts')
export class PostController {
    constructor(
        private readonly serviceCreateProject: ServiceCreateProject,
        private readonly serviceAcceptApplyUser: ServiceAcceptApplyUser,
    ) {}

    @Post('createProject')
    @ApiOperation({ summary: 'Create project' })
    // TODO fazer Api response para sucess e faild
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }

    @Post('acceptUserForWorkinProject')
    @ApiOperation({ summary: 'Choice which users can working in project' })
    // TODO fazer Api response para sucess e faild
    async acceptUserForWorkinProject(@Body() body: DTOBodyAcceptUser) {
        const { idProject, idOwnerProject, idUsers } = body;

        const result = await this.serviceAcceptApplyUser.execute(
            idOwnerProject,
            idUsers,
            idProject,
        );
        return result;
    }
}
