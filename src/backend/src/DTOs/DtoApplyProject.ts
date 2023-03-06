import { IsInt, IsNotEmpty } from 'class-validator';

export class DTOBodyApplyProject {
    @IsNotEmpty({ message: 'idProject is required' })
    @IsInt({ message: 'is not a number' })
    idProject: number;

    @IsNotEmpty({ message: 'idUser is required' })
    @IsInt({ message: 'is not a number' })
    idUser: number;

    @IsNotEmpty({ message: 'idRole is required' })
    @IsInt({ message: 'is not a number' })
    idRole: number;
}
