import { IsNotEmpty, Length } from 'class-validator/types/decorator/decorators';

export class DTOBodyDeleteProject {
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: string;

    @IsNotEmpty({ message: 'idUser is required' })
    idUser: string;
}
