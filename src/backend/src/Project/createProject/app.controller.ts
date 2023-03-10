import { ServiceCreateProject } from './app.service';
import { Body, Controller, Post } from '@nestjs/common';
import { DTOBodyCreateProject } from 'src/Project/createProject/DTO/DTOCreateProject';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Project')
export class ControllerCreateProject {
    constructor(private serviceCreateProject: ServiceCreateProject) {}

    @Post('createProject')
    @ApiOperation({ summary: 'Create project' })
    // TODO fazer Api response para sucess e faild
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }
}
