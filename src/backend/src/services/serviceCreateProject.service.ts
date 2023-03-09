import { ModelSelect } from 'src/models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { Tproject } from '../types/TmodelCreate';

import { ModelCreate } from '../models/modelCreate';

@Injectable()
export class ServiceCreateProject {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) {}

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
                        error: 'This name is using',
                    },
                    HttpStatus.CONFLICT,
                );
            }
        });

        if (!validateTags) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Não existe tags com esses nomes',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (!validateRoles) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Não existe roles com esses nomes',
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
