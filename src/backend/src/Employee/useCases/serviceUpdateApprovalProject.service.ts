import { ModelUpdate } from '../models/modelsUpdate';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceUpdateApprovalProject {
    constructor(private modelUpdate: ModelUpdate) {}

    async execute(idManager: number, idProject: number, isAproved: boolean) {
        // TODO fazer validações!!!
        // id do líder do projeto
        // id do projeto
        // se foi aprovado isApproved
        const result = await this.modelUpdate.updateApprovalProject(
            isAproved,
            idProject,
        );

        return result;
    }
}
