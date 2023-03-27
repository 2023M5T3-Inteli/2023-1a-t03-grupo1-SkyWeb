import { ModelCreate } from '../../models/modelCreate';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceApplyProject {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) { }

    async execute(_idProject: number, _idUser: number, _idRole: number) {
        const userApply =
            await this.modelSelect.findUserApplyProjectByIdUserAndIdProject(
                _idProject,
                _idUser,
                _idRole,
            );
        const userRole =
            await this.modelSelect.findUserApplyProjectByIdRoleAndIdProject(
                _idRole,
                _idProject,
            );
        const userExist = await this.modelSelect.findUserApplyProjectExistUser(
            _idUser,
        );
        const projectExist =
            await this.modelSelect.findUserApplyProjectExistProject(_idProject);
        const roleExist = await this.modelSelect.findUserApplyProjectExistRole(
            _idRole,
        );

        if (userApply.length != 0) {
            throw new HttpException(
                {
                    status: HttpStatus.AMBIGUOUS,
                    error: 'Ambigous id in user, project or role',
                },
                HttpStatus.AMBIGUOUS,
            );
        }

        if (userRole.length === 0) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Not exist project or role with this ID',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (userExist.length === 0) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'User does not exist',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (projectExist.length === 0) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Project does not exist',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (roleExist.length === 0) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Role does not exist',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        const result = this.modelCreate.applyProject(
            _idProject,
            _idUser,
            _idRole,
        );
        return result;
    }
}
