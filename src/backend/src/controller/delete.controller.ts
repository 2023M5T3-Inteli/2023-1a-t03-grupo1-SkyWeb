// ALL DELETE's here
import { Controller, Body, Post, Delete } from '@nestjs/common';

import { ServicesDeleteProject } from '../services/serviceDeleteProject.service';

import { DTOBodyDeleteProject } from '../DTOs/DtoApply';

@Controller('delete')
export class DeleteController {
    constructor(
        private readonly servicesDeleteProject: ServicesDeleteProject,
    ) {}

    @Delete('deleteProject')
    async deleteProject(@Body() body: DTOBodyDeleteProject) {
        const { idProject, idUser } = body;

        const result = await this.servicesDeleteProject.execute(
            idProject,
            idUser,
        );

        return { message: result };
    }
}
