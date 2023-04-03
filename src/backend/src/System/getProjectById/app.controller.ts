import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceGetProjectsByUserId } from './app.service';
import { DTOBodyGetProjectByUserId } from './DTO/DTOBodyGetProjectByUserId';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('System')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetProjectById {
    constructor(
        private serviceGetProjectsByUserId: ServiceGetProjectsByUserId,
    ) {}

    @Get('getProjectByUserId')
    @ApiOperation({ summary: 'Get infos project by id leader' })
    // TODO fazer Api response para sucess e faild
    async getProjectByUserId(@Body() body: DTOBodyGetProjectByUserId) {
        const { idUser } = body;
        const result = await this.serviceGetProjectsByUserId.execute(idUser);
        return result;
    }
}
