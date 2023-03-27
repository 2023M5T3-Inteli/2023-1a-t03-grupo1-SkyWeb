import { Injectable } from '@nestjs/common';
import { ModelSelect } from 'src/models/modelSelect';

@Injectable()
export class ServiceGetProjectByOwner {
    constructor(private readonly modelSelect: ModelSelect) {}

    async execute(idOwner: number) {
        const result = await this.modelSelect.getProjectByOwnerId(idOwner);
        return result;
    }
}
