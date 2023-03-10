import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyCreateProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'name is required' })
    @IsString({ message: 'name is not a string' })
    @Length(3, 35, { message: 'name number of characters not correspond' })
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    aplicationDeadLine: string; //Use Date-Time

    @ApiProperty()
    dateStart: string; //Use Date-Time

    @ApiProperty()
    duration: string; //Use Date-Time

    @ApiProperty()
    isAproved: boolean;

    @ApiProperty()
    status: string;

    @ApiProperty()
    idUser: number;

    @ApiProperty()
    idManager: number;

    @ApiProperty()
    idProject: number;

    @ApiProperty()
    idTag: number[];

    @ApiProperty()
    idRole: number[];
}
