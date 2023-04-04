import { Injectable } from '@nestjs/common';
import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetProjectsApplied{
    constructor(private readonly modelSelect:ModelSelect){}
    async execute(id: number) {
        const result = await this.modelSelect.getProjectsAppliedById(id)
        return result
    }
}