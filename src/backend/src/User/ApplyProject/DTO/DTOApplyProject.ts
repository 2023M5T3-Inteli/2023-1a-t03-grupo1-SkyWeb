import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class DTOBodyApplyProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    @IsInt({ message: 'is not a number' })
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idUser is required' })
    @IsInt({ message: 'is not a number' })
    idUser: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idRole is required' })
    @IsInt({ message: 'is not a number' })
    idRole: number;
}