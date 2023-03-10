import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceAcceptApplyUser } from './app.service';
import { DTOBodyAcceptUser } from './DTO/DTOBodyAcceptUser';

@Controller()
@ApiTags('UserLeader')
export class ControllerAcceptApply {
    constructor(private serviceAcceptApplyUser: ServiceAcceptApplyUser) {}

    @Post('acceptUserForWorkinProject')
    @ApiOperation({ summary: 'Choice which users can working in project' })
    // TODO fazer Api response para sucess e faild
    async acceptUserForWorkinProject(@Body() body: DTOBodyAcceptUser) {
        const { idProject, idOwnerProject, idUsers } = body;

        const result = await this.serviceAcceptApplyUser.execute(
            idOwnerProject,
            idUsers,
            idProject,
        );
        return result;
    }
}
