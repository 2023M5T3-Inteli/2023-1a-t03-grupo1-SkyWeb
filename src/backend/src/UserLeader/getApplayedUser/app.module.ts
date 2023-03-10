import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetApplayedUser } from './app.controller';
import { ServiceGetApplayedUser } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetApplayedUser],
    providers: [ServiceGetApplayedUser],
    exports: [ServiceGetApplayedUser],
})
export class GetApplayedUserModule {}
