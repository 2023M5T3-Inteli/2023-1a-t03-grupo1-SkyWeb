//Importando a classe do service
import { ServiceUpdateApprovalProject } from "../useCases/serviceUpdateApprovalProject.service"
import { Controller, Put, Body } from "@nestjs/common"
import { DTOBodyApprovalProject } from "../DTOs/DTOBodyApprovalProject"

@Controller()
export class ControllerUpdateApprovalProject {
    constructor (private readonly serviceUpdateApprovalProject: ServiceUpdateApprovalProject){
    }

    @Put(':id/approval')
    async execute(@Body() body: DTOBodyApprovalProject){
        const {idLeader, idProject, isAproved} = body

        const result = await this.serviceUpdateApprovalProject.execute(idLeader, idProject, isAproved)

        return result  
    }
}