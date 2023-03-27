import { Module } from '@nestjs/common';
import { applyProject } from './ApplyProject/app.module';
import { AuthModule } from './auth/app.module';
import { UnApplyUserModule } from './unApplyUser/app.module';

@Module({
    imports: [UnApplyUserModule, applyProject, AuthModule],
    exports: [UnApplyUserModule, applyProject, AuthModule],
})
export class UserModule {}
