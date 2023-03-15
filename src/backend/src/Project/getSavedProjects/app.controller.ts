import { Controller, Body, Get } from "@nestjs/common";
import { ServiceGetSavedProjects } from "./app.service";
import { DTOGetSavedProjects } from "./DTO/DTOGetSavedProjects";


@Controller()
export class ControllerGetSavedProjects {
    constructor(private serviceGetSavedProject: ServiceGetSavedProjects) { }

    @Get('getSavedProjects')
    async getSavedProjects(@Body() body: DTOGetSavedProjects) {
        const { idUser } = body
        const getSaved = await this.serviceGetSavedProject.execute(idUser)
        return getSaved
    }

}