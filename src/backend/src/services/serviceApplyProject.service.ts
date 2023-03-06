import { ModelCreate } from "src/models/modelCreate";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { ModelSelect } from "src/models/modelSelect";

@Injectable()
export class ServiceApplyProject {
    constructor(private readonly modelCreate: ModelCreate, private readonly modelSelect: ModelSelect) { }

    async execute(_idProject: number, _idUser: number, _idRole: number) {
        const userApply = await this.modelSelect.findUserApplyProjectByIdUserAndIdProject(_idUser, _idProject, _idRole)
        const { idUser, idProject, idRole } = userApply

        if (idUser == idUser && idProject == idProject && idRole == idRole) {
            throw new HttpException(
                {
                    status: HttpStatus.AMBIGUOUS,
                    error: 'Não existe projeto com esse ID',
                },
                HttpStatus.AMBIGUOUS,
            );
        }


        const result = this.modelCreate.applyProject(idProject, idUser, idRole)
        return result
    }
}