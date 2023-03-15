import { IsNotEmpty } from "class-validator";


export class DTOGetSavedProjects {

    @IsNotEmpty()
    idUser: number
}