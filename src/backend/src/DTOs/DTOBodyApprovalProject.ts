import { IsNotEmpty, IsPositive, IsBoolean, IsNumber } from 'class-validator';
//TODO pensar em outras validações

export class DTOBodyApprovalProject {
    @IsNotEmpty({ message: 'idManager     is required' })
    @IsPositive({ message: 'idManager must be a positive number' })  
    @IsNumber()    
    idManager: number;

    @IsNotEmpty({ message: 'idProject is required' })
    @IsPositive({ message: 'idleader must be a positive number' })
    @IsNumber()  
    idProject: number;

    @IsNotEmpty({ message: 'isApproved is required' })
    @IsBoolean({message:'isApproved must be a boolean'})
    isAproved: boolean;
}
