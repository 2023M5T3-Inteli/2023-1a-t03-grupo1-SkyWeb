import { IsArray, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyAcceptUser {
    @ApiProperty({ description: 'id leader project', example: 2345123 })
    @IsNotEmpty()
    @IsNumber()
    idOwnerProject: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    idUsers: number[];

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    idProject: number;
}
