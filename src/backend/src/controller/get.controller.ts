import { Body, Controller, Get } from '@nestjs/common';
import { DtoFilterTag } from 'src/DTOs/DtoFilterTag';

import { ServiceFilterTag } from '../useCases/serviceFilterTag.service';

@Controller('get')
export class GetController {
    constructor(private readonly serviceFilterTag: ServiceFilterTag) { }

    @Get('filterTag')
    async FilterTag(@Body() body: DtoFilterTag) {
        const {tag} = body
        const result = await this.serviceFilterTag.execute(tag);
        return result;
    }
}
