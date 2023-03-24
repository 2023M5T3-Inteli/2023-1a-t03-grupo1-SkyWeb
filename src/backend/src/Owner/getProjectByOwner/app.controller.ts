import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceGetProjectByOwner } from './app.service';

@Controller()
@ApiTags('Owner')
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
