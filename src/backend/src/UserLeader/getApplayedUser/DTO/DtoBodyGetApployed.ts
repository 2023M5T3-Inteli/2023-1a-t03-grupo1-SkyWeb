import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DtoBodyApployed {
    @ApiProperty()
    @IsNotEmpty({ message: 'escolha um projeto finalizado' })
    idProject: number;
}
