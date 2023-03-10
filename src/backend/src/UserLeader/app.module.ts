import { Module } from '@nestjs/common';
import { AcceptApplyModule } from './acceptApplys/app.module';
import { GetApplayedUserModule } from './getApplayedUser/app.module';
import { UpdateStatusProjectModule } from './updateStatusProject/app.module';

@Module({
    imports: [
        AcceptApplyModule,
        GetApplayedUserModule,
        UpdateStatusProjectModule,
    ],
    exports: [
        AcceptApplyModule,
        GetApplayedUserModule,
        UpdateStatusProjectModule,
    ],
})
export class UserLeaderModule {}
