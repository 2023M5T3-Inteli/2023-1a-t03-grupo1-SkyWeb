import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerUpdateStatusProject } from './app.controller';
import { ServiceUpdateProjectStatus } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerUpdateStatusProject],
    providers: [ServiceUpdateProjectStatus],
    exports: [ServiceUpdateProjectStatus],
})
export class UpdateStatusProjectModule {}
