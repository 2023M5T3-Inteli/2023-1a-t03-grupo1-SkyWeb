import { ServicesDeleteProject } from './../useCases/serviceAplly.service';
import { Controller, Body } from '@nestjs/common';
import { DTOBodyDeleteProject } from '../DTOs/DtoApply';

@Controller()
export class DeleteProjectControler {
    constructor(
        private readonly servicesDeleteProject: ServicesDeleteProject,
    ) {}

    execute(@Body() body: DTOBodyDeleteProject) {
        const { idProject, idUser } = body;

        this.servicesDeleteProject.execute();
    }
}
