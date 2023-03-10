import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { verifyAllAplyeds } from './scripts/funcs';

import { ModelSelect } from '../../models/modelSelect';
import { ModelDelete } from '../../models/modelDelete';

@Injectable()
export class ServiceAcceptApplyUser {
    constructor(
        private readonly modelDelete: ModelDelete,
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute(
        idOwnerProject: number,
        idUsers: number[],
        idProject: number,
    ) {
        // futuros:
        // TODO validar sé está escolhendo a quantidade certa de pessoas para as vagas

        const project = await this.modelSelect.findProjectById(idProject);

        if (project) {
            const { isApproved, idUser } = project;

            if (isApproved == false || isApproved == null) {
                throw new HttpException(
                    {
                        status: HttpStatus.UNAUTHORIZED,
                        error: 'this project do not have a permission',
                    },
                    HttpStatus.UNAUTHORIZED,
                );
            }

            if (idUser != idOwnerProject) {
                throw new HttpException(
                    {
                        status: HttpStatus.UNAUTHORIZED,
                        error: 'you do not have a permission for this action',
                    },
                    HttpStatus.UNAUTHORIZED,
                );
            }

            const validateAllApplyerExists = await verifyAllAplyeds(
                idUsers,
                idProject,
                this.modelSelect,
            );

            if (!validateAllApplyerExists) {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Some data is wrong, do a refresh please',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }
        } else {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'this project don"t exist',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        const result = await this.modelDelete.deleteUsersApplyProject(
            idUsers,
            idProject,
        );
        return result;
    }
}
