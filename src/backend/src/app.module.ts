import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prismaServices/prisma.service';
import { ModelDelete } from './Employee/models/modelDelete';
import { DeleteProjectController } from './Employee/controller/controllerDeleteProject';
import {ServicesDeleteProject} from './Employee/useCases/serviceDeleteProject.service';
import { ModelSelect } from './Employee/models/modelSelect';

@Module({
    imports: [],
    controllers: [AppController,DeleteProjectController],
    providers: [PrismaService, ModelDelete, AppService, ServicesDeleteProject,ModelSelect],
})
export class AppModule {}
