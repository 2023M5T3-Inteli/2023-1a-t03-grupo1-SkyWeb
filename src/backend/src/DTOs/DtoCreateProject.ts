import { IsNotEmpty, Length, IsString } from "class-validator"

export class DTOBodyCreateProject {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name is not a string" })
    @Length(3, 35, { message: "name number of characters not correspond" })
    name: string;

    description: string
    aplicationDeadLine: string //Use Date-Time
    dateStart: string //Use Date-Time
    duration: string //Use Date-Time
    isAproved: boolean
    status: string

    idUser: number
    idManager: number
    idProject: number
    idTag: number
    idRole: number
}