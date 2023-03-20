import { Body, Controller, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicesDeleteProject } from './app.service';
import { DTOBodyDeleteProject } from './DTO/DTOBodyDeleteProjec';

@Controller()
@ApiTags('Projeto')
export class ControllerDeleteProject {

    constructor(private servicesDeleteProject: ServicesDeleteProject) { }

    @Delete('deleteProject')
    @ApiOperation({ summary: 'Delete some project by ID' })
    @ApiResponse({
        status: 201,
        description:
            '[{idUser: number, idProject: number}]'
    })
    @ApiResponse({
        status: 401,
        description:
            `The user don't have permission to delete this project`
    })
    @ApiResponse({
        status: 404,
        description:
            `Dont have project with this id`
    })
    // TODO fazer Api response para sucess e faild
    async deleteProject(@Body() body: DTOBodyDeleteProject) {
        const { idProject, idUser } = body;

    const result = await this.servicesDeleteProject.execute(
        idProject,
        idUser,
    );

    return { message: result };
}

}