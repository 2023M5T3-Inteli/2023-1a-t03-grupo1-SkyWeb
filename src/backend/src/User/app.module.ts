import { Module } from '@nestjs/common';
import { applyProject } from './ApplyProject/app.module';
import { UnApplyUserModule } from './unApplyUser/app.module';

@Module({
    imports: [UnApplyUserModule, applyProject],
    exports: [UnApplyUserModule, applyProject],
})
export class UserModule { }
