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


    async findUserApplyProjectByIdUserAndIdProject(idUser: number, idProject: number, idRole: number) {
        return await this.prisma.userApplyProject.findUnique({
            where: {
                idUser_idProject_idRole: { idProject: idProject, idUser: idUser, idRole: idRole }
            }
        })
    }
}
