import { ServiceCreateProject } from './app.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DTOBodyCreateProject } from './DTO/DTOCreateProject';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Project')
@UseGuards(AuthGuard('jwt'))
export class ControllerCreateProject {
    constructor(private serviceCreateProject: ServiceCreateProject) {}

    @Post('createProject')
    @ApiOperation({ summary: 'Create project' })
    @ApiResponse({
        status: 201,
        description:
            '[{  name: string, description: string, aplicationDeadLine: string, dateStart: string, duration: string, isAproved: true, status: string, idUser: 0, idManager: 0, idProject: 0, idTag: [ string ], idRole: [ string]}]',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to create a project`,
    })
    @ApiResponse({
        status: 404,
        description: `Does not exist roles or tags with this id's`,
    })
    @ApiResponse({
        status: 409,
        description: 'This name is in use',
    })
    // TODO fazer Api response para sucess e faild
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body);
        return result;
    }
}
