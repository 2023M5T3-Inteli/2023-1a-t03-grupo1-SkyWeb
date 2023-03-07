import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOBodyUpdateProjectStatus {
    @ApiProperty()
    @IsNotEmpty({ message: 'idLeader is required' })
    idLeader: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'Progress is required' })
    progress: string;
}
