import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ModelCreate } from "src/models/modelCreate";
import { ModelSelect } from "src/models/modelSelect";

@Injectable()
export class ServiceSaveProject {
    constructor(private readonly modelCreate: ModelCreate, private readonly modelSelect: ModelSelect) { }

    async execute(idProject: number, idUser: number) {
        const checkProject = await this.modelSelect.findProjectById(idProject)
        const checkUser = await this.modelSelect.getCheckExistentUsers(idUser)
        const getUsersAndProjectId = await this.modelSelect.getExistUserAndProjectInSaveProject(idProject, idUser)

        console.log(getUsersAndProjectId)
        if (!checkProject) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Does not exist project with this id',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (!checkUser) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Does not exist user with this id'
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (getUsersAndProjectId.length != 0) {
            throw new HttpException(
                {
                    status: HttpStatus.AMBIGUOUS,
                    error: 'This data already exist'
                },
                HttpStatus.AMBIGUOUS,
            );
        }

        const result = await this.modelCreate.saveProject(idProject, idUser)
    }
}
