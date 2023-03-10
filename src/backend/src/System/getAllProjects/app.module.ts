import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetAllProject } from './app.controller';
import { ServiceGetAllProjects } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetAllProject],
    providers: [ServiceGetAllProjects],
    exports: [ServiceGetAllProjects],
})
export class GetAllProjectModule {}
