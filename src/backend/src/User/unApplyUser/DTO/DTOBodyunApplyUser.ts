import { isNotEmpty, IsNotEmpty, IsNumber } from 'class-validator';

export class DTOBodyunApplyUser {
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @IsNotEmpty({ message: 'idUser is required' })
    idUser: number;

    @IsNotEmpty({ message: 'idRole is required' })
    idRole: number;
}
