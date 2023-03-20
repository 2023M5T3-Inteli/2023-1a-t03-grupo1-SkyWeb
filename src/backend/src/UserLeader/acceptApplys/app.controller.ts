import { Body, Controller, Post } from '@nestjs/common';
import { ApiAcceptedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceAcceptApplyUser } from './app.service';
import { DTOBodyAcceptUser } from './DTO/DTOBodyAcceptUser';

@Controller()
@ApiTags('UserLeader')
export class ControllerAcceptApply {
    constructor(private serviceAcceptApplyUser: ServiceAcceptApplyUser) {}

    @Post('acceptApplys')
    @ApiOperation({ summary: 'Aceitar candidaturas de usuários para trabalhar em um projeto' })
    @ApiAcceptedResponse({ description: 'Candidaturas de usuários aceitas com sucesso' })
    async acceptUserForWorkinProject(@Body() body: DTOBodyAcceptUser) {
        const { idProject, idOwnerProject, idUsers } = body;

        const result = await this.serviceAcceptApplyUser.execute(
            idOwnerProject,
            idUsers,
            idProject,
        );
        return result;
    }
}
