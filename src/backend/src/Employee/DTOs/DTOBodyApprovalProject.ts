import { IsNotEmpty } from 'class-validator'
//TODO pensar em outras validações

export class DTOBodyApprovalProject {
    @IsNotEmpty({message: "idManager     is required"})
    idManager: number

    @IsNotEmpty({message: "idProject is required"})
    idProject: number

    @IsNotEmpty({message: "Progress is required"})
    isAproved: boolean
}