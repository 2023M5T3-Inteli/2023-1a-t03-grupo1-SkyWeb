import { ModelCreate } from "../models/modelCreate";
import { Tproject } from "../models/modelCreate";
import { Injectable } from "@nestjs/common"

@Injectable()
export class ServiceCreateProject {

    constructor(private readonly modelCreate: ModelCreate) { }

    async execute(data: Tproject) {

        const { idTag, idRole } = data
        //modelSelect
        const result = await this.modelCreate.createProject(data);

        const { id } = result

        const result1 = await this.modelCreate.connectTagsProject(id, idTag)

        const result2 = await this.modelCreate.connectRolesProject(id, idRole)

        return result2
    }

}