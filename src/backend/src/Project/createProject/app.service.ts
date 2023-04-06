import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { Tproject } from './types/TmodelCreate';

import { ModelCreate } from '../../models/modelCreate';

@Injectable()
export class ServiceCreateProject {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) { }

    async execute(data: Tproject) {
        const { idTag, idRole, name, aplicationDeadLine, dateStart } = data;

        const allProject = await this.modelSelect.getAllProjects();
        const allTags = await this.modelSelect.getAllTags();
        const allRoles = await this.modelSelect.getAllRoles();

        let alltagsIds = allTags.map(function (item) {
            return item.id;
        });

        let allrolesIds = allRoles.map(function (item) {
            return item.id;
        });

        let validateTags = idTag.every((item) => alltagsIds.includes(item));
        let validateRoles = idRole.every((item) => allrolesIds.includes(item));

        allProject.map((item) => {
            if (item.name == name) {
                throw new HttpException(
                    {
                        status: HttpStatus.CONFLICT,
                        error: 'This name is in use',
                    },
                    HttpStatus.CONFLICT,
                );
            }
        });

        if (!validateTags) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `does not exist tags with this id's`,
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (!validateRoles) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `does not exist roles with this id's`,
                },
                HttpStatus.NOT_FOUND,
            );
        }

        // TODO verificar se o tempo de aplicationDeadLine não é o mesmo

        try {
            const firstStepProject = await this.modelCreate.createProject(data);

            if (firstStepProject) {
                const { id } = firstStepProject;

                for (let index = 0; index < idTag.length; index++) {
                    await this.modelCreate.connectTagsProject(id, idTag[index]);
                }

                for (let index = 0; index < idRole.length; index++) {
                    await this.modelCreate.connectRolesProject(
                        id,
                        idRole[index],
                    );
                }

                return firstStepProject;
            } else {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Failed create project, try again ',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}

/**This code is a service in the application that handles project creation. It imports ModelSelect and ModelCreate from other modules, as well as some external NestJS libraries (Injectable, HttpException, and HttpStatus).

ServiceCreateProject is an injectable service that receives the ModelCreate and ModelSelect models in its constructor. The execute function is asynchronous and receives a data object of type Tproject that contains several properties, such as idTag, idRole, name, aplicationDeadLine, and dateStart.

The function starts by fetching all projects, tags, and roles using ModelSelect. It then validates whether the provided tags and roles exist in the records. If not, an HttpException exception is thrown with a NOT_FOUND status code.

Next, it checks if the project name is already in use by another project. If so, an HttpException exception is thrown with a CONFLICT status code.

After that, it attempts to create the project using ModelCreate.createProject(). If project creation is successful, it connects the tags and roles to the project with the ModelCreate.connectTagsProject() and ModelCreate.connectRolesProject() functions. If any of these steps fail, an HttpException exception is thrown with a BAD_REQUEST status code.

Finally, the function returns the created project object or throws an HttpException exception with a BAD_REQUEST status code if there is any error during project creation. */