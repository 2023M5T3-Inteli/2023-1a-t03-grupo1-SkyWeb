import { Body, Controller, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServicesDeleteApplyUser } from './app.service';
import { DTOBodyunApplyUser } from './DTO/DTOBodyunApplyUser';

@Controller()
@ApiTags('User')
export class ControllerUnApplyUser {
    constructor(private servicesDeleteApplyUser: ServicesDeleteApplyUser) {}

    @Delete('deleteApply')
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
