import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceFilterTag } from './app.service';
import { DTOFilterTag } from './DTO/DTOFilterTag';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('System')
@UseGuards(AuthGuard('jwt'))
export class ControllerGetProjectForTag {
    constructor(private serviceFilterTag: ServiceFilterTag) {}

    @Get('filterTag')
    @ApiOperation({ summary: `Get all projects with the given tags ` })
    @ApiResponse({
        status: 201,
        description: `[{tag: Array<number>}]`,
    })
    @ApiResponse({
        status: 404,
        description: `Dont exist tags with this id's`,
    })
    async FilterTag(@Body() body: DTOFilterTag) {
        const { tag } = body;
        const result = await this.serviceFilterTag.execute(tag);
        return result;
    }
}
