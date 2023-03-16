import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceGetAllProjects } from './app.service';

@Controller()
@ApiTags('System')
export class ControllerGetAllProject {
    constructor(
        private readonly serviceGetAllProjects: ServiceGetAllProjects,
    ) { }

    @Get('getAllProject')
    async getAllProjects() {
        const projects = await this.serviceGetAllProjects.execute();
        return projects;
    }
}
