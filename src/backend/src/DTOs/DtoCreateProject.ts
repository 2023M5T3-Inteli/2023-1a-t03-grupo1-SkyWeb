import { IsNotEmpty, Length, IsString, IsInt } from "class-validator"

export class DTOBodyCreateProject {
    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name is not a string" })
    @Length(3, 35, { message: "name number of characters not correspond" })
    name: string;

    @IsNotEmpty({ message: "name is required" })
    @IsString({ message: "name is not a string" })
    @Length(3, 3500, { message: "name number of characters not correspond" })
    description: string


    aplicationDeadLine: string //Use Date-Time
    dateStart: string //Use Date-Time
    duration: string //Use Date-Time

    status: string//perguntar

    @IsNotEmpty({ message: "idUser is required" })
    @IsInt({ message: 'idUser is not a int' })
    idUser: number

    @IsNotEmpty({ message: "idManager is required" })
    @IsInt({ message: 'idManager is not a int' })
    idManager: number


    @IsNotEmpty({ message: "idTag is required" })
    @IsInt({ message: 'idTag is not a int' })
    idTag: number

    @IsNotEmpty({ message: "idRole is required" })
    @IsInt({ message: 'idRole is not a int' })
    idRole: number
}