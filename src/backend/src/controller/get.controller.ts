// ALL GET's here
import { Get, Body, Controller } from '@nestjs/common';
import { DtoBodyApployed } from 'src/DTOs/DtoBodyGetApployed';
import { DtoFilterTag } from 'src/DTOs/DtoFilterTag';
import { ServiceGetApplayedUser } from 'src/services/serviceGetApplayedUsers.service';
import { DTOBodyGetProjectByUserId } from 'src/DTOs/DTOBodyGetProjectByUserId';
import { ServiceGetProjectsByUserId } from 'src/services/serviceGetAllProjectsCreatedByMe.service';
import { ServiceGetAllProjects } from '../services/serviceGetProject.service';
import { ServiceFilterTag } from '../services/serviceFilterTag.service';

@Controller('get')
export class GetController {
    constructor(
        private serviceGetApplayedUser: ServiceGetApplayedUser,
        private readonly serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
        private readonly serviceGetAllProjects: ServiceGetAllProjects,
        private readonly serviceFilterTag: ServiceFilterTag,
    ) {}

    @Get('getApplayed')
    async getApplayed(@Body() body: DtoBodyApployed) {
        const { idProject } = body;
        return await this.serviceGetApplayedUser.execute(idProject);
    }

    @Get('getProjectByUserId')
    async getProjectByUserId(@Body() body: DTOBodyGetProjectByUserId) {
        const { userId } = body;
        const result = await this.serviceGetProjectsByUserId.execute(userId);
        return result;
    }

    @Get('getallproject')
    async getAllProjects() {
        const projects = await this.serviceGetAllProjects.execute();
        return projects;
    }

    @Get('filterTag')
    async FilterTag(@Body() body: DtoFilterTag) {
        const { tag } = body;
        const result = await this.serviceFilterTag.execute(tag);
        return result;
    }
}
