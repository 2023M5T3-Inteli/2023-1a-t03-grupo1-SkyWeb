import { PrismaService } from "src/prismaServices/prisma.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelUpdate {
    constructor (private prisma: PrismaService) {
    }
    async updateApprovalProject(isAproved: boolean, idProject: number){
        const result = await this.prisma.project.update({
            data: {
                isAproved: isAproved
            },
            where: {
                id: idProject
            }
        })
        return result
    }
}