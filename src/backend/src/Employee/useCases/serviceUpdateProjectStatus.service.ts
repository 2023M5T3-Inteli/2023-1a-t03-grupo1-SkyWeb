//Importando a nossa classe :)
import { Injectable } from '@nestjs/common';
import { ModelUpdate } from '../models/modelsUpdate';

@Injectable()
export class ServiceUpdateProjectStatus {
    constructor(private modelUpdate: ModelUpdate) {}

    async execute(idLeader: number, idProject: number, progress: string) {
        // TODO fazer validações!!!
        // id do líder do projeto
        // id do projeto
        // se foi aprovado isApproved
        const result = await this.modelUpdate.updateProjectStatus(
            progress,
            idProject,
        );

        return result;
    }
}
