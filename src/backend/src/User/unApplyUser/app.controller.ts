import { Body, Controller, Delete, UseGuards } from '@nestjs/common';
import { ApiAcceptedResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ServicesDeleteApplyUser } from './app.service';
import { DTOBodyunApplyUser } from './DTO/DTOBodyunApplyUser';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('unApplyUser')
@UseGuards(AuthGuard('jwt'))
export class ControllerUnApplyUser {
    constructor(private servicesDeleteApplyUser: ServicesDeleteApplyUser) {}

    @Delete('deleteApply')
    @ApiOperation({ summary: 'Deleta a inscrição do usuário para o projeto' })
    @ApiAcceptedResponse({
        description: 'Usuário removido com sucesso',
        type: String,
    })
    async deleteAplly(@Body() body: DTOBodyunApplyUser) {
        const { idProject, idUser, idRole } = body;

        const result = await this.servicesDeleteApplyUser.execute(
            idProject,
            idRole,
            idUser,
        );

        return result;
    }
}
