import { Controller, Get, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetAllProjects } from './app.service';

@Controller()
@ApiTags('System')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetAllProject {
    constructor(
        private readonly serviceGetAllProjects: ServiceGetAllProjects,
    ) {}

    @Get('getAllProjects')
    @ApiBearerAuth()
    @ApiOperation({ summary: `get all projects from database` })
    async getAllProjects() {
        const projects = await this.serviceGetAllProjects.execute();
        return projects;
    }
}
