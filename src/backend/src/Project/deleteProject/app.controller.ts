import { Body, Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ServicesDeleteProject } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@UseGuards(AuthGuard('jwt'))
export class ControllerDeleteProject {
    constructor(private readonly serviceDeleteProject: ServicesDeleteProject) {}

    @Delete('project/:id')
    async deleteProject(@Param() id: { id: number }) {
        const result = await this.serviceDeleteProject.execute(id.id);

        return result;
    }
}
