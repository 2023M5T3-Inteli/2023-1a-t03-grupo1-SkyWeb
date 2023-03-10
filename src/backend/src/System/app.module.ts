import { Module } from '@nestjs/common';
import { GetAllProjectModule } from './getAllProjects/app.module';
import { GetProjectByIdModule } from './getProjectById/app.module';
import { GetProjectForTagModule } from './getProjectForTag/app.module';

@Module({
    imports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
    ],
    exports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
    ],
})
export class SystemModule {}
