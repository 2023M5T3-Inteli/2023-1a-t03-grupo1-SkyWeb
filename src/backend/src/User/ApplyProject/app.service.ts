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

/**This code defines a service named ServiceApplyProject, which takes two models as dependencies: ModelCreate and ModelSelect.

The execute method of this service takes three parameters _idProject, _idUser, and _idRole, and uses the modelSelect instance to check if a user with _idUser has already applied for the project with _idProject and the role with _idRole. Then it checks whether a project and a role with the provided IDs exist or not.

If any of these checks fail, it throws an HttpException with a corresponding status code and error message. Otherwise, it uses the modelCreate instance to create an application for the user for the specified project and role. Finally, it returns the result.

Overall, this service provides a convenient way to apply a user for a project and a role, while ensuring that the necessary checks are performed before the application is created. */