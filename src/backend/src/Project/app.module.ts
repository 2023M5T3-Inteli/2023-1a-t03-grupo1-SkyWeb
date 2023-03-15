import { Module } from '@nestjs/common';
import { CreateProjectModule } from './createProject/app.module';
import { DeleteProjectModule } from './deleteProject/app.module';
import { SaveProjectModule } from './saveProject/app.module';

@Module({
    imports: [CreateProjectModule, DeleteProjectModule, SaveProjectModule],
    exports: [CreateProjectModule, DeleteProjectModule, SaveProjectModule],
})
export class ProjectModule { }
