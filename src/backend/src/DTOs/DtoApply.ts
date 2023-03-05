import { IsNotEmpty, IsNumber } from 'class-validator';

export class DTOBodyDeleteProject {
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @IsNotEmpty({ message: 'idUser is required' })
    idUser: number;
}