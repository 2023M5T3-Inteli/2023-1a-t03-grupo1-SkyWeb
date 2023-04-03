import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceGetApplayedUser } from './app.service';
import { DtoBodyApployed } from './DTO/DtoBodyGetApployed';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('UserLeader')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetApplayedUser {
    constructor(private serviceGetApplayedUser: ServiceGetApplayedUser) {}

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
}
