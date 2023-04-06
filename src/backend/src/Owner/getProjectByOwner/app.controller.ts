import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceGetProjectByOwner } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Owner')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetProjectByOwner {
    constructor(
        private readonly serviceGetProjectByOwner: ServiceGetProjectByOwner,
    ) {}

    @Get('projectsowner/:idOwner')
    async projectsowner(@Param() params) {
        const result = await this.serviceGetProjectByOwner.execute(
            Number(params.idOwner),
        );

        return result;
    }
}
