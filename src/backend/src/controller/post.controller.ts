import { DTOBodyAcceptUser } from './../DTOs/DTOBodyAcceptUser';
// ALL POST's here
import { Body, Controller, Post } from '@nestjs/common';
import { ServiceAcceptApplyUser } from 'src/services/serviceAcceptApplyUser.service';

import { DTOBodyCreateProject } from '../DTOs/DtoCreateProject';
import { ServiceCreateProject } from '../services/serviceCreateProject.service';
import { ServiceApplyProject } from '../services/serviceApplyProject.service';
import { DTOBodyApplyProject } from 'src/DTOs/DtoApplyProject';

@Controller('post')
export class PostController {
    constructor(
        private readonly serviceCreateProject: ServiceCreateProject,
        private readonly serviceAcceptApplyUser: ServiceAcceptApplyUser,
        private readonly serviceApplyProject: ServiceApplyProject
    ) { }

    @Post('createProject')
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }

    @Post('applyProject')
    async applyProject(@Body() body: DTOBodyApplyProject) {
        const { idProject, idRole, idUser } = body
        const result = await this.serviceApplyProject.execute(idProject, idUser, idRole);
    }

    @Post('acceptUserForWorkinProject')
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
