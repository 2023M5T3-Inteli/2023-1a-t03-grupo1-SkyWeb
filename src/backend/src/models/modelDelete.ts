import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

@Injectable()
export class ModelDelete {
    constructor(private prisma: PrismaService) {}

    async deleteProject(projectId: number) {
        await this.prisma.project.delete({
            where: {
                id: projectId,
            },
        });
    }

    async deleteApplayUser(idProject: number, idRole: number, idUser: number) {
        await this.prisma.userApplyProject.delete({
            where: {
                idUser_idProject_idRole:{idProject, idRole,idUser},
            }
        })
    }

}
