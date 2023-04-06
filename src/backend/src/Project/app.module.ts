import { Module } from '@nestjs/common';
import { CreateProjectModule } from './createProject/app.module';
import { DeleteProject } from './deleteProject/app.module';
// import { DeleteProjectModule } from './deleteProject/app.module';
import { GetSavedProjects } from './getSavedProjects/app.module';
import { SaveProjectModule } from './saveProject/app.module';

@Module({
    imports: [
        CreateProjectModule,
        SaveProjectModule,
        GetSavedProjects,
        DeleteProject,
    ],
    exports: [
        CreateProjectModule,
        SaveProjectModule,
        GetSavedProjects,
        DeleteProject,
    ],
})
export class ProjectModule {}
