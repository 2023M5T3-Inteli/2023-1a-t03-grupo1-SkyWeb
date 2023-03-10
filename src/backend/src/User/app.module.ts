import { Module } from '@nestjs/common';
import { UnApplyUserModule } from './unApplyUser/app.module';

@Module({
    imports: [UnApplyUserModule],
    exports: [UnApplyUserModule],
})
export class UserModule {}
