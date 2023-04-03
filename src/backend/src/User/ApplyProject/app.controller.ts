import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { DTOBodyApplyProject } from 'src/User/ApplyProject/DTO/DTOApplyProject';
import { ServiceApplyProject } from './app.service';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('User')
@UseGuards(AuthGuard('jwt'))
export class ControllerApplyProject {
    constructor(private readonly serviceApplyProject: ServiceApplyProject) {}

    @Post('applyProject')
    @ApiOperation({ summary: 'Apply for a project' })
    @ApiResponse({
        status: 201,
        description: '[{idUser:number,idProject:number,idRole:number}]',
    })
    @ApiResponse({
        status: 300,
        description: 'Ambigous id in user, project or role',
    })
    @ApiResponse({
        status: 404,
        description: 'User, project or role does not exist',
    })
    async applyProject(@Body() body: DTOBodyApplyProject) {
        const { idProject, idRole, idUser } = body;
        const result = await this.serviceApplyProject.execute(
            idProject,
            idUser,
            idRole,
        );
        return result;
    }
}

/**
 * This is a controller file for a /applyProject route in a NestJS application.
 * When a user makes a POST request to this route, it calls the applyProject() function.
 * The request body is passed to this function as a parameter,
 *  which is used to call the execute() function on the ServiceApplyProject object.
 * The result of this function is returned as a response to the request.
 * The route is documented using the '@ApiOperation' and '@ApiResponse' annotations.
 */
