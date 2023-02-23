import { ServicesDeleteProject } from '../useCases/serviceDeleteProject.service';
import { Controller, Body, Post, Delete } from '@nestjs/common';
import { DTOBodyDeleteProject } from '../DTOs/DtoApply';
import { } from '../models/modelDelete';

@Controller()
export class DeleteProjectController {
    constructor(
        private readonly servicesDeleteProject: ServicesDeleteProject,
    ) {}

    @Delete('deleteProject')
    async deleteProject(@Body() body: DTOBodyDeleteProject): Promise<{ message: string }> {
        const { idProject, idUser } = body;
        
        const result = await this.servicesDeleteProject.execute(idProject,idUser);

        return { message: result };
    }
}
