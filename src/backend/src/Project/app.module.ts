import { Module } from '@nestjs/common';
import { CreateProjectModule } from './createProject/app.module';
// import { DeleteProjectModule } from './deleteProject/app.module';
import { GetSavedProjects } from './getSavedProjects/app.module';
import { SaveProjectModule } from './saveProject/app.module';

@Module({
    imports: [CreateProjectModule, SaveProjectModule, GetSavedProjects],
    exports: [CreateProjectModule, SaveProjectModule, GetSavedProjects],
})
export class ProjectModule {}
