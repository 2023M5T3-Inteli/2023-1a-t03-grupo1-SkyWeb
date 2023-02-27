import { IsNotEmpty } from "class-validator"

export class DtoBodyApployed{
    @IsNotEmpty({message:"escolha um projeto finalizado"})
    idProject:number
}