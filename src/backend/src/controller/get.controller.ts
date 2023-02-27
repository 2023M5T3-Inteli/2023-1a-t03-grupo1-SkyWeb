// ALL GET's here

import {Get, Body, Controller} from "@nestjs/common"
import { DtoBodyApployed } from "src/DTOs/DtoBodyGetApployed";
import { ServiceGetApplayedUser } from "src/useCases/serviceGetApplayedUsers.service";

@Controller('get')
export class GetController{
    constructor (private serviceGetApplayedUser:ServiceGetApplayedUser ){}
    @Get('getApplayed')
    async getApplayed(@Body() body:DtoBodyApployed){
        const {idProject} = body
        return await this.serviceGetApplayedUser.execute(idProject)
    }

}