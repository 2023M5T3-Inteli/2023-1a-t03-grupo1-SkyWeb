import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetProjectById } from './app.controller';
import { ServiceGetProjectsByUserId } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetProjectById],
    providers: [ServiceGetProjectsByUserId],
    exports: [ServiceGetProjectsByUserId],
})
export class GetProjectByIdModule {}
