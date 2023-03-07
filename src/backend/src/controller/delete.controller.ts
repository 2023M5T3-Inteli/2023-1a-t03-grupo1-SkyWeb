// ALL DELETE's here
import { Controller, Body, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ServicesDeleteProject } from '../services/serviceDeleteProject.service';

import { DTOBodyDeleteProject } from '../DTOs/DtoApply';

@Controller('delete')
@ApiTags('Deletes')
export class DeleteController {
    constructor(
        private readonly servicesDeleteProject: ServicesDeleteProject,
    ) {}

    @Delete('deleteProject')
    @ApiOperation({ summary: 'Delete some project by ID' })
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
