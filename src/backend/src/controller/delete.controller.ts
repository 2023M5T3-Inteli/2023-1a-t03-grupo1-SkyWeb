// ALL DELETE's here
import { Controller, Body, Post, Delete } from '@nestjs/common';

import { ServicesDeleteProject } from '../services/serviceDeleteProject.service';
import { ServicesDeleteApplyUser } from '../services/serviceDeleteApplyUser.service';

import { DTOBodyDeleteProject } from '../DTOs/DTOBodyDeleteProjec';

@Controller('delete')
export class DeleteController {
    constructor(
        private readonly servicesDeleteProject: ServicesDeleteProject,
        private readonly serviceDeleteApplyUser: ServicesDeleteApplyUser,
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

    @Delete('deleteApply')
    async deleteAplly(@Body() body: DTOBodyDeleteProject) {
        const { idProject, idUser, idRole } = body;

        const result = await this.serviceDeleteApplyUser.execute(
            idProject,
            idRole,
            idUser,
        );

        return result;
    }
}
