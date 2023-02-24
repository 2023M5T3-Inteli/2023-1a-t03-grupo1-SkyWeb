import { ServiceCreateProject } from "../useCases/serviceCreateProject.service"
import { Body, Controller, Post } from "@nestjs/common"
import { DTOBodyCreateProject } from "../DTOs/DtoCreateProject"

@Controller()
export class ControllerCreateProject {
    constructor(
        private readonly serviceCreateProject: ServiceCreateProject,
    ) { }

    @Post('createProject')
    async createProject(@Body() body: DTOBodyCreateProject) {
        const result = await this.serviceCreateProject.execute(body)
        return result
    }
}