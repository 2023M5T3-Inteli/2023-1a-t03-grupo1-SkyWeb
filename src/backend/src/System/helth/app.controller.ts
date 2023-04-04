import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('System')
export class ControllerHelth {
    @Get('/')
    async hello() {
        return 'Hello skyWeb APi';
    }
}
