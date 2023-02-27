// ALL POST's here
import { Body, Controller, Post } from '@nestjs/common';

import { DTOBodyCreateProject } from '../DTOs/DtoCreateProject';
import { ServiceCreateProject } from '../useCases/serviceCreateProject.service';

@Controller('post')
export class PostController {
    constructor(private readonly serviceCreateProject: ServiceCreateProject) {}

    @Post('createProject')
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }
}
