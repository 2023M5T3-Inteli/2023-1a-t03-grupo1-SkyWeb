import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
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

    @Get('getProjectByUserId/:id')
    @ApiOperation({ summary: 'Get infos project by id leader' })
    // TODO fazer Api response para sucess e faild
    async getProjectByUserId(@Param() id: { id: number }) {
        const result = await this.serviceGetProjectsByUserId.execute(
            Number(id.id),
        );
        return result;
    }
}
