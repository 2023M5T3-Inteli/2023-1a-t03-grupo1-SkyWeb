// ALL GET's here

import { Controller, Get, Body } from "@nestjs/common";
import { DTOBodyGetProjectByUserId } from "src/DTOs/DTOBodyGetProjectByUserId";
import { ServiceGetProjectsByUserId } from "src/useCases/serviceGetAllProjectsCreatedByMe.service";
@Controller('get')
export class GetController {
    constructor(private readonly serviceGetProjectsByUserId: ServiceGetProjectsByUserId){}

    @Get('getProjectByUserId')
    async getProjectByUserId(@Body() body:DTOBodyGetProjectByUserId){
        const {userId} = body
        const result = await this.serviceGetProjectsByUserId.execute(userId)
        return result
    }
}