// ALL POST's here
import { Body, Controller, Post } from '@nestjs/common';

import { DTOBodyCreateProject } from '../DTOs/DtoCreateProject';
import { ServiceCreateProject } from '../useCases/serviceCreateProject.service';
import { ServiceApplyProject } from '../useCases/serviceApplyProject.service';
import { DTOBodyApplyProject } from 'src/DTOs/DtoApplyProject';

@Controller('post')
export class PostController {
    constructor(private readonly serviceCreateProject: ServiceCreateProject, private readonly serviceApplyProject: ServiceApplyProject) { }

    @Post('createProject')
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }

    @Post('applyProject')
    async applyProject(@Body() body: DTOBodyApplyProject) {
        const { idProject, idRole, idUser } = body
        const result = await this.serviceApplyProject.execute(idProject, idUser, idRole);
        return result;
    }
}
