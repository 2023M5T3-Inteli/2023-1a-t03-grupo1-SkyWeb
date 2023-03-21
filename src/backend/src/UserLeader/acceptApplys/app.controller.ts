import { Body, Controller, Post } from '@nestjs/common';
import { ApiAcceptedResponse, ApiOperation, ApiTags,ApiResponse } from '@nestjs/swagger';
import { ServiceAcceptApplyUser } from './app.service';
import { DTOBodyAcceptUser } from './DTO/DTOBodyAcceptUser';

@Controller()
@ApiTags('UserLeader')
export class ControllerAcceptApply {
    constructor(private serviceAcceptApplyUser: ServiceAcceptApplyUser) {}


    @Post('acceptUserForWorkinProject')
    @ApiOperation({ summary: 'Choice which users can working in project' })
    @ApiResponse({
        status: 201,

        description: '[{"count": 0}]',
    })
    @ApiResponse({
        status: 400,
        description: 'idOwnerProject should not be empty',
    })
    @ApiResponse({
        status: 401,
        description: 'you do not have a permission for this action',
    })
    @ApiResponse({
        status: 404,
        description: 'this project does not  exist',
    })
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
