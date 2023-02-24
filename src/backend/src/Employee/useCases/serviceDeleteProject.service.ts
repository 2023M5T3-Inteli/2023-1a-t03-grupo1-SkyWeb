import { Injectable } from '@nestjs/common';
import { ModelDelete } from '../models/modelDelete';
import { ModelSelect } from '../models/modelSelect';


@Injectable()
export class ServicesDeleteProject {
    
    constructor(private modelDelete: ModelDelete, private modelSelect: ModelSelect) {}
    async execute(projectId: number, idUser: number) {
        // Encontra o projeto a ser excluído
        const project = await this.modelSelect.findProjectById(projectId);

        if (!project) {
            throw new Error(`Projeto com o ID ${projectId} não foi encontrado`);
        }

        // Exclui o projeto
        await this.modelDelete.deleteProject(projectId);

        return `Projeto com o ID ${projectId} foi excluído com sucesso.`;
    }

}
