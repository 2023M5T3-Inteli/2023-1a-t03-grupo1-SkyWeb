import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) {}

    async getAllProjects() {
        return await this.prisma.project.findMany({
            where: {
                isApproved: true,
            },
        });
    }

    async findProjectById(projectId: number) {
        return await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
    }
    async filterTag(tag: Array<number>) {
        const result = await this.prisma.projectTag.findMany({
            where: {
                idTag: { in: tag },
                Project: { isApproved: true, status: 'Open' },
            },
            select: {
                Project: {
                    select: {
                        name: true,
                        description: true,
                        aplicationDeadLine: true,
                        duration: true,
                        dateStart: true,
                        isApproved: true,
                        status: true,
                    },
                },
            },
        });

        const jsonResult = result.map((item) => {
            return item.Project;
        });

        return jsonResult;
    }
    async getAllTags() {
        const result = await this.prisma.tag.findMany({
            select: { id: true },
        });
        return result;
    }

    async getProjectsByUserId(idUser: number) {
        return await this.prisma.project.findMany({
            where: { idUser: idUser },
        });
    }

    async getAllUsersAployed(projectId: number) {
        const result = await this.prisma.userApplyProject.findMany({
            where: {
                idProject: projectId,
            },
            select: {
                User: { select: { email: true, fullName: true } },
                Role: { select: { name: true } },
                idUser: true,
            },
        });

        const jsonResult = result.map((item) => {
            return { id: item.idUser, user: item.User, role: item.Role };
        });

        return jsonResult;
    }
}
