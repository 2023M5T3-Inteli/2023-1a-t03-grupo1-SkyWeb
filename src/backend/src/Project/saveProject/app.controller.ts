import { Body, Controller, Post } from '@nestjs/common';
import { ServiceSaveProject } from './app.service'
import { DTOSaveProject } from './DTO/DTOSaveProject';

@Controller()
export class ControllerSaveProject {
    constructor(private serviceSaveProject: ServiceSaveProject) { }

    @Post('saveProject')
    async saveProject(@Body() body: DTOSaveProject) {
        const { idProject, idUser } = body

        const result = await this.serviceSaveProject.execute(idProject, idUser);
        return result
    }

}