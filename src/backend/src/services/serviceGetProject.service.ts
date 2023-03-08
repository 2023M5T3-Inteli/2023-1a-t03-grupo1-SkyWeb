import { Injectable } from '@nestjs/common';
import { ModelSelect } from 'src/models/modelSelect';

@Injectable()
export class ServiceGetAllProjects {
    constructor(private modelSelect:ModelSelect){}


  async execute(){
    return await this.modelSelect.getAllProjects();
  }
}
