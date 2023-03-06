import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModelDelete } from '../models/modelDelete';
import { ModelSelect } from '../models/modelSelect';

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

        // Exclui o projeto
        await this.modelDelete.deleteProject(projectId);

        return `Projeto com o ID ${projectId} foi excluído com sucesso.`;
    }
}
