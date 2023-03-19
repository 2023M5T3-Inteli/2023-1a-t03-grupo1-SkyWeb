import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class DTOGetSavedProjects {

    @IsNotEmpty()
    @ApiProperty()
    idUser: number
}