import { Module } from '@nestjs/common';
import { DeleteProjectModule } from './approvalProject/app.module';
import { GetProjectsByOwner } from './getProjectByOwner/app.module';

@Module({
    imports: [DeleteProjectModule, GetProjectsByOwner],
    exports: [DeleteProjectModule, GetProjectsByOwner],
})
export class OwnerModule {}
