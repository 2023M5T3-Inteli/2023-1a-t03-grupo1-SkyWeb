import { IsNotEmpty, IsPositive, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOBodyUpdateProjectStatus {
    @ApiProperty()
    @IsNotEmpty({ message: 'idLeader is required' })
    @IsNumber()
    @IsPositive({ message: 'idleader must be a positive number' })
    idLeader: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    @IsNumber()
    @IsPositive({ message: 'idProject must be a positive number' })
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'Progress is required' })
    @IsString()
    progress: string;
}
