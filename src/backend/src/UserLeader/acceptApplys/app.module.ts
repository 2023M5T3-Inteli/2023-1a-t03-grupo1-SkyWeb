import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerAcceptApply } from './app.controller';
import { ServiceAcceptApplyUser } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerAcceptApply],
    providers: [ServiceAcceptApplyUser],
    exports: [ServiceAcceptApplyUser],
})
export class AcceptApplyModule {}
