import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerDeleteProject } from './app.controller';
import { ServicesDeleteProject } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerDeleteProject],
    providers: [ServicesDeleteProject],
    exports: [ServicesDeleteProject],
})
export class DeleteProject {}
