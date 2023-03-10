import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerUnApplyUser } from './app.controller';
import { ServicesDeleteApplyUser } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerUnApplyUser],
    providers: [ServicesDeleteApplyUser],
    exports: [ServicesDeleteApplyUser],
})
export class UnApplyUserModule {}
