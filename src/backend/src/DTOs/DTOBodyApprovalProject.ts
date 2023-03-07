import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOBodyApprovalProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'idManager     is required' })
    idManager: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'isAproved is required' })
    isAproved: boolean;
}
