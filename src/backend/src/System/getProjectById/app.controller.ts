import { Body, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceGetProjectsByUserId } from './app.service';
import { DTOBodyGetProjectByUserId } from './DTO/DTOBodyGetProjectByUserId';

@Controller()
@ApiTags('System')
export class ControllerGetProjectById {
    constructor(
        private serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
    ) {}

    @Get('getProjectByUserId')
    @ApiOperation({ summary: 'Get infos project by id leader' })
    // TODO fazer Api response para sucess e faild
    async getProjectByUserId(@Body() body: DTOBodyGetProjectByUserId) {
        const { userId } = body;
        const result = await this.serviceGetProjectsByUserId.execute(userId);
        return result;
    }
}
