// ALL GET's here
import { Get, Body, Controller, UseGuards } from '@nestjs/common';
import { DtoBodyApployed } from '../DTOs/DtoBodyGetApployed';
import { DtoFilterTag } from '../DTOs/DtoFilterTag';
import { ServiceGetApplayedUser } from '../services/serviceGetApplayedUsers.service';
import { DTOBodyGetProjectByUserId } from '../DTOs/DTOBodyGetProjectByUserId';
import { ServiceGetProjectsByUserId } from '../services/serviceGetAllProjectsCreatedByMe.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceGetAllProjects } from '../services/serviceGetProject.service';
import { ServiceFilterTag } from '../services/serviceFilterTag.service';

@Controller('get')
@ApiTags('Gets')
export class GetController {
    constructor(
        private serviceGetApplayedUser: ServiceGetApplayedUser,
        private readonly serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
        private readonly serviceGetAllProjects: ServiceGetAllProjects,
        private readonly serviceFilterTag: ServiceFilterTag,
    ) {}

    @Get('getApplayed')
    @ApiOperation({ summary: 'Get users are applyed for specific project' })
    @ApiResponse({
        status: 200,
        description:
            '[{id:number,user:{email:string, fullName: string},role:{name:string}}]',
    })
    // TODO fazer Api response para sucess e faild
    async getApplayed(@Body() body: DtoBodyApployed) {
        const { idProject } = body;
        const result = await this.serviceGetApplayedUser.execute(idProject);
        return result;
    }

    @Get('getProjectByUserId')
    @ApiOperation({ summary: 'Get infos project by id leader' })
    // TODO fazer Api response para sucess e faild
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
