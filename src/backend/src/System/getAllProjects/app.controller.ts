import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceGetAllProjects } from './app.service';

@Controller()
@ApiTags('System')
export class ControllerGetAllProject {
    constructor(
        private readonly serviceGetAllProjects: ServiceGetAllProjects,
    ) { }

    @Get('getAllProjects')
    @ApiOperation({ summary: `get all projects from database` })
    async getAllProjects() {
        const projects = await this.serviceGetAllProjects.execute();
        return HttpStatus.OK;
    }
}
