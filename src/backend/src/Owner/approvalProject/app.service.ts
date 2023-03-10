import { Injectable } from '@nestjs/common';

import { ModelUpdate } from '../../models/modelsUpdate';

@Injectable()
export class ServiceUpdateApprovalProject {
    constructor(private modelUpdate: ModelUpdate) {}

    async execute(idManager: number, idProject: number, isAproved: boolean) {
        const result = await this.modelUpdate.updateApprovalProject(
            isAproved,
            idProject,
        );
        return result;
    }
}
