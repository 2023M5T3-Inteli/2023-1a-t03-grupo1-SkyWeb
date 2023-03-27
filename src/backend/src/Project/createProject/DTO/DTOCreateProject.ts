import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**name: a string that represents the name of the project. It is mandatory and must be between 3 and 35 characters long.
 
description: A string that represents the description of the project.

applicationDeadLine: a string that represents the deadline for project applications. The expected format is Date-Time.

dateStart: A string that represents the start date of the project. The expected format is Date-Time.

duration: A string that represents the duration of the project. The expected format is Date-Time.

isApproved: a Boolean that indicates whether the project has been approved or not.

status: A string that represents the status of the project.

idUser: An integer that represents the ID of the user who created the project.

idManager: An integer that represents the manager ID assigned to the project.

idProject: An integer that represents the project ID.

idTag: An array of integers that represents the IDs of the tags assigned to the project.

idRole: An array of integers that represents the IDs of the roles assigned to the project. */

export class DTOBodyCreateProject {
    @ApiProperty()
    @IsNotEmpty({ message: 'name is required' })
    @IsString({ message: 'name is not a string' })
    @Length(3, 35, { message: 'name number of characters not correspond' })
    name: string;

    @ApiProperty()
    @IsString({ message: `descriptionis not a string` })
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
