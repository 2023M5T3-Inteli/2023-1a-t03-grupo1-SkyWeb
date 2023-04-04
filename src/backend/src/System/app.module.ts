import { Module } from '@nestjs/common';
import { GetAllProjectModule } from './getAllProjects/app.module';
import { GetProjectByIdModule } from './getProjectById/app.module';
import { GetProjectForTagModule } from './getProjectForTag/app.module';
import { HealthModule } from './helth/app.module';

@Module({
    imports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
    ],
    exports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
    ],
})
export class SystemModule {}
