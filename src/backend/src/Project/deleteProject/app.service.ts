import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ModelDelete } from '../../models/modelDelete';
import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServicesDeleteProject {
    constructor(
        private modelDelete: ModelDelete,
        private modelSelect: ModelSelect,
        
    ) {}
    async execute(projectId: number, idUser: number) {
        // Encontra o projeto a ser excluído
        const project = await this.modelSelect.findProjectById(projectId);

        if (!project) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Não existe projeto com esse ID',
                },
                HttpStatus.NOT_FOUND,
            );
        }

        // Verifica se o usuário que criou o projeto é o mesmo que está tentando excluí-lo
        if (project.idUser !== idUser) {
            throw new HttpException(
                {
                    status: HttpStatus.UNAUTHORIZED,
                    error: 'Você não tem permissão para excluir este projeto',
                },
                HttpStatus.UNAUTHORIZED,
            );
        }

        // Exclui os project roles do projeto projectrolesbyprojectid
        await this.modelDelete.deleteProject(projectId);

        // Exclui os user apply projects do projeto
        await this.modelDelete.deleteUserApplyProjectsByProjectId(projectId);

        // Exclui os save project do projeto
        await this.modelDelete.deleteSaveProjectsByProjectId(projectId);

        // Exclui os project tags do projeto
        await this.modelDelete.deleteProjectTagsByProjectId(projectId);


        return `Projeto com o ID ${projectId} foi excluído com sucesso.`;
    }
}
