import { Body, Controller, UseGuards, Get,Param } from '@nestjs/common';
import { ServiceGetProjectsApplied } from './app.service';
import { get } from 'http';

@Controller()
export class ControllerProjectsApplied {
    constructor(private readonly serviceGetProjectsApplied: ServiceGetProjectsApplied) { }
    
    @Get("projectsapplied/:id")
    async execute(@Param() id: { id: number }) {
        const result = await this.serviceGetProjectsApplied.execute(Number(id.id))
        return result
    }
}
