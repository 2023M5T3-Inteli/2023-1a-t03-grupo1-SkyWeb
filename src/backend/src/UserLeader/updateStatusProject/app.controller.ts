import { Controller, Put, Body, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceUpdateProjectStatus } from './app.service';
import { DTOBodyUpdateProjectStatus } from './DTO/DTOBodyUpdateProjectStatus';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('UserLeader')
@UseGuards(AuthGuard('jwt'))
export class ControllerUpdateStatusProject {
    constructor(
        private readonly serviceUpdateProjectStatus: ServiceUpdateProjectStatus,
    ) {}

    @Put('updateStatusProject')
    @ApiOperation({ summary: 'Update status project ' })
    // TODO fazer Api response para sucess e faild
    async updateStatusProject(@Body() body: DTOBodyUpdateProjectStatus) {
        const { idLeader, idProject, progress } = body;

        await this.serviceUpdateProjectStatus.execute(
            idLeader,
            idProject,
            progress,
        );

        return HttpStatus.OK;
    }
}
