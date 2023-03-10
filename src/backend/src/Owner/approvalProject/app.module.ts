import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerApprovalProject } from './app.controller';
import { ServiceUpdateApprovalProject } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerApprovalProject],
    providers: [ServiceUpdateApprovalProject],
    exports: [ServiceUpdateApprovalProject],
})
export class DeleteProjectModule {}
