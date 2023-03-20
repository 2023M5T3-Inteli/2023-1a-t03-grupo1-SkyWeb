import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty, IsNumber } from 'class-validator';

export class DTOBodyDeleteProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'idProject is required' })
    idProject: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idUser is required' })
    idUser: number;
}
