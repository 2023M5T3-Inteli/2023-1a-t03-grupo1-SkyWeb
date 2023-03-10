import { Injectable } from '@nestjs/common';

import { ModelDelete } from '../../models/modelDelete';

@Injectable()
export class ServicesDeleteApplyUser {
    constructor(private modelDelete: ModelDelete) {}

    async execute(idProject: number, idUser: number, idRole: number) {
        // TODO verificar se tal usuario está realmente se aplicando para tal vaga com tal role
        const result = await this.modelDelete.deleteApplayUser(
            idProject,
            idUser,
            idRole,
        );

        return result;
    }
}
