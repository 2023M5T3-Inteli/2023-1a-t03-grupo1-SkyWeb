// ALL GET's here
import { Get, Body, Controller } from '@nestjs/common';
import { DtoBodyApployed } from 'src/DTOs/DtoBodyGetApployed';
import { ServiceGetApplayedUser } from 'src/services/serviceGetApplayedUsers.service';
import { DTOBodyGetProjectByUserId } from 'src/DTOs/DTOBodyGetProjectByUserId';
import { ServiceGetProjectsByUserId } from 'src/services/serviceGetAllProjectsCreatedByMe.service';

@Controller('get')
export class GetController {
    constructor(
        private serviceGetApplayedUser: ServiceGetApplayedUser,
        private readonly serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
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
}
