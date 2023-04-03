import { Controller, Body, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceGetSavedProjects } from './app.service';
import { DTOGetSavedProjects } from './DTO/DTOGetSavedProjects';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Project')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetSavedProjects {
    constructor(private serviceGetSavedProject: ServiceGetSavedProjects) {}

    @Get('getSavedProjects')
    @ApiOperation({ summary: `Get saved projects from specific user` })
    @ApiResponse({
        status: 201,
        description: `[{idUser: number}]`,
    })
    async getSavedProjects(@Body() body: DTOGetSavedProjects) {
        const { idUser } = body;
        const getSaved = await this.serviceGetSavedProject.execute(idUser);
        return getSaved;
    }
}
