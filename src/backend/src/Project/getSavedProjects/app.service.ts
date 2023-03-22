import { Injectable } from "@nestjs/common/decorators";
import { ModelSelect } from "../../models/modelSelect";


@Injectable()
export class ServiceGetSavedProjects {
    constructor(private readonly modelSelect: ModelSelect) { }

    async execute(idUser: number) {
        const getUserId = await this.modelSelect.getExistUserInSaveProject(idUser)
        return getUserId
    }
}