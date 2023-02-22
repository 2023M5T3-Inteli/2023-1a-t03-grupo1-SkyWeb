//Importando a classe do service
import { ServiceUpdateProjectStatus } from "../useCases/serviceUpdateProjectStatus.service"
import { Controller, Put, Body } from "@nestjs/common"
import { DTOBodyUpdateProjectStatus } from "../DTOs/DTOBodyUpdateProjectStatus"

@Controller()
export class ControllerUpdateProjectStatus {
    constructor (private readonly serviceUpdateProjectStatus: ServiceUpdateProjectStatus){
    }

    @Put()
    async execute(@Body() body: DTOBodyUpdateProjectStatus){
        const {idLeader, idProject, progress} = body

        const result = await this.serviceUpdateProjectStatus.execute(idLeader, idProject, progress)

        return result
    }

}

