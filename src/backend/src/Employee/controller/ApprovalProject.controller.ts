//Importando a classe do service
import { ServiceUpdateApprovalProject } from "../useCases/serviceUpdateApprovalProject.service"
import { Controller, Put, Body } from "@nestjs/common"
import { DTOBodyApprovalProject } from "../DTOs/DTOBodyApprovalProject"

@Controller()
export class ControllerUpdateApprovalProject {
    constructor (private readonly serviceUpdateApprovalProject: ServiceUpdateApprovalProject){
    }

    @Put('approval')
    async execute(@Body() body: DTOBodyApprovalProject){
        const {idManager, idProject, isAproved} = body

        const result = await this.serviceUpdateApprovalProject.execute(idManager, idProject, isAproved)

        return result  
    }
}