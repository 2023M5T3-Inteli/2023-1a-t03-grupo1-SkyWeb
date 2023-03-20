import { Body, Controller, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServicesDeleteProject } from './app.service';
import { DTOBodyDeleteProject } from './DTO/DTOBodyDeleteProjec';

@Controller()
@ApiTags('Projeto')
export class ControllerDeleteProject {
constructor(private servicesDeleteProject: ServicesDeleteProject) {}

@Delete('deleteProject')
@ApiOperation({ summary: 'Excluir projeto por ID' })
async deleteProject(@Body() body: DTOBodyDeleteProject) {
    const { idProject, idUser } = body;

    const result = await this.servicesDeleteProject.execute(
        idProject,
        idUser,
    );

    return { message: result };
}

}