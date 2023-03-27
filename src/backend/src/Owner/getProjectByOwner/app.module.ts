import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetProjectByOwner } from './app.controller';
import { ServiceGetProjectByOwner } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetProjectByOwner],
    providers: [ServiceGetProjectByOwner],
    exports: [ServiceGetProjectByOwner],
})
export class GetProjectsByOwner {}
