import { Controller, Get } from '@nestjs/common';
import { ServiceGetAllProjects } from 'src/useCases/serviceGetProject.service';

@Controller('get')
export class GetController {
  constructor(private readonly serviceGetAllProjects: ServiceGetAllProjects) {}

  @Get("getallproject")
  async getAllProjects(){
    const projects = await this.serviceGetAllProjects.execute();
    return projects
  }
}
