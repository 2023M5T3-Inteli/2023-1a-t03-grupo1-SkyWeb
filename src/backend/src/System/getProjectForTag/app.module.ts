import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetProjectForTag } from './app.controller';
import { ServiceFilterTag } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetProjectForTag],
    providers: [ServiceFilterTag],
    exports: [ServiceFilterTag],
})
export class GetProjectForTagModule {}
