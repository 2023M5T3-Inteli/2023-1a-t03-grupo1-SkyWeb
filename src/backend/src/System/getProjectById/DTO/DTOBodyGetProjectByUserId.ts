import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyGetProjectByUserId {
    @ApiProperty()
    @IsNotEmpty()
    idUser: number;
}
