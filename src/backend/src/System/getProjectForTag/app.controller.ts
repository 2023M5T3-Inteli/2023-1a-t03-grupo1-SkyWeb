import { Body, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiceFilterTag } from './app.service';
import { DTOFilterTag } from './DTO/DtoFilterTag';

@Controller()
@ApiTags('System')
export class ControllerGetProjectForTag {
    constructor(private serviceFilterTag: ServiceFilterTag) {}

    @Get('filterTag')
    async FilterTag(@Body() body: DTOFilterTag) {
        const { tag } = body;
        const result = await this.serviceFilterTag.execute(tag);
        return result;
    }
}
