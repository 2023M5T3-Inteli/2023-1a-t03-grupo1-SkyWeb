import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetProjectsByUserId {
    constructor(private readonly modelSelect: ModelSelect) { }
    async execute(idUser: number) {
        const result = await this.modelSelect.getProjectsByUserId(idUser);
        return result;
    }
}
