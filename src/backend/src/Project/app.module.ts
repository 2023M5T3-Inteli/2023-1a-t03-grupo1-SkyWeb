import { Module } from '@nestjs/common';
import { CreateProjectModule } from './createProject/app.module';
import { DeleteProjectModule } from './deleteProject/app.module';

@Module({
    imports: [CreateProjectModule, DeleteProjectModule],
    exports: [CreateProjectModule, DeleteProjectModule],
})
export class ProjectModule {}
