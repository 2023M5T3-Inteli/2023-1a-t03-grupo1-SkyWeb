import { ModelSelect } from "src/models/modelSelect";
import {Injectable} from "@nestjs/common"


@Injectable( )
export class ServiceGetApplayedUser{
    constructor (private readonly modelSelet: ModelSelect){}

    async execute(idProject:number){
       const result = await this.modelSelet.getAllUsersAployed(idProject)
        return result;
    }
}