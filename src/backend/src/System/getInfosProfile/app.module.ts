import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ProfileController } from './app.controller';
import { getProfileInfo } from './app.service';

@Injectable()
export class ServiceGetAllProjects {
    constructor(private modelSelect: ModelSelect) {}

    async execute() {
        return await this.modelSelect.getAllProjects();
    }
}
