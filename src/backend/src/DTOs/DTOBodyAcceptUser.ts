import { IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class DTOBodyAcceptUser {
    @IsNotEmpty()
    @IsNumber()
    idOwnerProject: number;

    @IsNotEmpty()
    @IsArray()
    idUsers: number[];

    @IsNotEmpty()
    @IsNumber()
    idProject: number;
}
