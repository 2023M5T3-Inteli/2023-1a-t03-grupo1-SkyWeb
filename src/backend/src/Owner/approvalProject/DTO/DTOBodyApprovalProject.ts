import { IsNotEmpty, IsPositive, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOBodyApprovalProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'idManager     is required' })
    @IsPositive({ message: 'idManager must be a positive number' })
    @IsNumber()
    idManager: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    @IsPositive({ message: 'idleader must be a positive number' })
    @IsNumber()
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'isAproved is required' })
    @IsBoolean({ message: 'isApproved must be a boolean' })
    isApproved: boolean;
}
