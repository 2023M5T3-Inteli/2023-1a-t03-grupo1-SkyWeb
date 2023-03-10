import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetApplayedUser {
    constructor(private readonly modelSelet: ModelSelect) {}

    async execute(idProject: number) {
        const result = await this.modelSelet.getAllUsersAployed(idProject);
        return result;
    }
}
