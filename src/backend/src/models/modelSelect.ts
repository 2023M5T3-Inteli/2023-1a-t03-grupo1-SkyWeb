import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) { }

    async findProjectById(projectId: number) {
        return await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
    }

    async getAllUsersAployed(projectId: number) {
        return await this.prisma.userApplyProject.findMany({
            where: {
                idProject: projectId
            },
            select: { User: { select: { email: true, fullName: true } }, Role:{select:{name:true}}}
        })
    }
}
