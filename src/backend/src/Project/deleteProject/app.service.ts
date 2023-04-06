import { ModelSelect } from 'src/models/modelSelect';
import { ModelDelete } from 'src/models/modelDelete';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ServicesDeleteProject {
    constructor(private readonly modelDelete: ModelDelete) {}

    async execute(idProject: number) {
        await this.modelDelete.deleteProject(Number(idProject));

        return `Projeto ${idProject} deletado com succeso`;
    }
}
