import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerSaveProject } from './app.controller';
import { ServiceSaveProject } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerSaveProject],
    providers: [ServiceSaveProject],
    exports: [ServiceSaveProject],
})
export class SaveProjectModule { }