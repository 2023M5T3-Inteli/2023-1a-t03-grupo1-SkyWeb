import { Injectable } from "@nestjs/common";
import { ModelDelete } from "src/models/modelDelete";


@Injectable()
export class ServicesDeleteApplyUser{
    constructor( private modelDelete: ModelDelete){}

    async execute(idProject:number, idUser:number, idRole: number){

        const result = await this.modelDelete.deleteApplayUser(idProject, idUser, idRole)

        return result
    }

}