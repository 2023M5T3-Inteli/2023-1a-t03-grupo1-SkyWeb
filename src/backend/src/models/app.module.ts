import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';
import { ModelCreate } from './modelCreate';
import { ModelDelete } from './modelDelete';
import { ModelSelect } from './modelSelect';
import { ModelUpdate } from './modelsUpdate';

@Module({
    exports: [ModelCreate, ModelDelete, ModelUpdate, ModelSelect],
    providers: [
        ModelCreate,
        ModelDelete,
        ModelUpdate,
        ModelSelect,
        PrismaService,
    ],
})
export class modelModule {}
