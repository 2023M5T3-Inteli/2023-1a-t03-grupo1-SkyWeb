// ALL GET's here
import { Get, Body, Controller } from '@nestjs/common';
import { DtoBodyApployed } from 'src/DTOs/DtoBodyGetApployed';
import { ServiceGetApplayedUser } from 'src/services/serviceGetApplayedUsers.service';
import { DTOBodyGetProjectByUserId } from 'src/DTOs/DTOBodyGetProjectByUserId';
import { ServiceGetProjectsByUserId } from 'src/services/serviceGetAllProjectsCreatedByMe.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('get')
@ApiTags('Gets')
export class GetController {
    constructor(
        private serviceGetApplayedUser: ServiceGetApplayedUser,
        private readonly serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
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
}
