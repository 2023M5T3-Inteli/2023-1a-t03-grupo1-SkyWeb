import { PrismaService } from "src/prismaServices/prisma.service";


export class ModelUpdate {
    constructor (private prisma: PrismaService) {
    }

    //Update do status do projeto (criado pelo usuário após aprovação)
    async updateProjectStatus(progress: string, id: number){
        await this.prisma.project.update({
            data: {
                status: progress
            },
            where: {
                id: id
            }
        })
    }
}