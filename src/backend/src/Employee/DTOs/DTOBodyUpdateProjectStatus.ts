import { IsNotEmpty } from 'class-validator';
//TODO pensar em outras validações

export class DTOBodyUpdateProjectStatus {
    @IsNotEmpty({ message: 'idLeader is required' })
    idLeader: number;

    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @IsNotEmpty({ message: 'Progress is required' })
    progress: string;
}
