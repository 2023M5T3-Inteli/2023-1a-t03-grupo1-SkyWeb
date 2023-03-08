import{IsNotEmpty} from "class-validator"

export class DTOBodyGetProjectByUserId {
    @IsNotEmpty()
    userId:number
}