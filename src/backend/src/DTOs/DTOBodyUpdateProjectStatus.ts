import { IsNotEmpty, IsPositive, IsNumber,IsString } from 'class-validator';
//TODO pensar em outras validações

export class DTOBodyUpdateProjectStatus {
    @IsNotEmpty({ message: 'idLeader is required' })
    @IsNumber()  
    @IsPositive({ message: 'idleader must be a positive number' }) 
    idLeader: number;

    @IsNotEmpty({ message: 'idProject is required' })
    @IsNumber()  
    @IsPositive({ message: 'idProject must be a positive number' })
    
    idProject: number;

    @IsNotEmpty({ message: 'Progress is required' })
    @IsString()
    progress: string;
}
