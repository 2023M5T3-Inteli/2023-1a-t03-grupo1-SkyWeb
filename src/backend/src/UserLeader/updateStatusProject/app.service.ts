import { Injectable } from '@nestjs/common';

import { ModelUpdate } from '../../models/modelsUpdate';

@Injectable()
export class ServiceUpdateProjectStatus {
    constructor(private modelUpdate: ModelUpdate) {}

    async execute(idLeader: number, idProject: number, progress: string) {
        const result = await this.modelUpdate.updateProjectStatus(
            progress,
            idProject,
        );

        return result;
    }
}
