import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerCreateProject } from './app.controller';
import { ServiceCreateProject } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerCreateProject],
    providers: [ServiceCreateProject],
    exports: [ServiceCreateProject],
})
export class CreateProjectModule { }
