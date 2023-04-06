import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceSaveProject } from './app.service';
import { DTOSaveProject } from './DTO/DTOSaveProject';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Project')
@UseGuards(AuthGuard('jwt'))
export class ControllerSaveProject {
    constructor(private serviceSaveProject: ServiceSaveProject) {}

    @Post('saveProject')
    @ApiOperation({ summary: 'User can save proejcts' })
    @ApiResponse({
        status: 201,
        description: `[{idProject: number, idUser: number}]`,
    })
    @ApiResponse({
        status: 300,
        description: `This data of save project already exist`,
    })
    @ApiResponse({
        status: 404,
        description: `Does not exist user or project with this id`,
    })
    async saveProject(@Body() body: DTOSaveProject) {
        const { idProject, idUser } = body;

        const result = await this.serviceSaveProject.execute(idProject, idUser);
        return result;
    }
}
