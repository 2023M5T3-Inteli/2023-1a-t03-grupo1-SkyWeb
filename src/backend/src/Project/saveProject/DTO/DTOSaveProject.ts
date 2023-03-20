import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class DTOSaveProject {
    @ApiProperty()
    @IsNotEmpty()
    idProject: number;

    @ApiProperty()
    @IsNotEmpty()
    idUser: number
}