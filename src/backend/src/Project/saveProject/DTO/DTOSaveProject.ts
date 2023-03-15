import { IsNotEmpty } from "class-validator";


export class DTOSaveProject {
    @IsNotEmpty()
    idProject: number;

    @IsNotEmpty()
    idUser: number
}