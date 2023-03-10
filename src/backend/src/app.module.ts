import { Module } from '@nestjs/common';

import { ModelDelete } from './models/modelDelete';
import { ModelCreate } from './models/modelCreate';
import { ModelUpdate } from './models/modelsUpdate';
import { ModelSelect } from './models/modelSelect';

import { ProjectModule } from './Project/app.module';
import { UserLeaderModule } from './UserLeader/app.module';
import { SystemModule } from './System/app.module';
import { OwnerModule } from './Owner/app.module';
import { UserModule } from './User/app.module';

@Module({
    imports: [
        ProjectModule,
        UserLeaderModule,
        UserModule,
        SystemModule,
        OwnerModule,
    ],
})
export class AppModule {}
