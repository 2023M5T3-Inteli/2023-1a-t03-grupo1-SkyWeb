import { Module } from '@nestjs/common';
import { DeleteProjectModule } from './approvalProject/app.module';

@Module({
    imports: [DeleteProjectModule],
    exports: [DeleteProjectModule],
})
export class OwnerModule {}
