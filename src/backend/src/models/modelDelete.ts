import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelDelete {
    constructor(private prisma: PrismaService) {}

    async deleteProject(projectId: number) {
        try {
            const result = await this.prisma.project.delete({
                where: {
                    id: projectId,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_GATEWAY,
                    error: error,
                },

                HttpStatus.BAD_GATEWAY,
            );
        }
    }

    async deleteApplayUser(idProject: number, idRole: number, idUser: number) {
        try {
            return await this.prisma.userApplyProject.delete({
                where: {
                    idUser_idProject_idRole: { idProject, idRole, idUser },
                },
            });
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_GATEWAY,
                    error: error,
                },

                HttpStatus.BAD_GATEWAY,
            );
        }
    }

    async deleteUsersApplyProject(idUsers: number[], idProject: number) {
        try {
            return await this.prisma.userApplyProject.deleteMany({
                where: {
                    idProject,
                    NOT: {
                        idUser: {
                            in: idUsers,
                        },
                    },
                },
            });
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_GATEWAY,
                    error: error,
                },
                HttpStatus.BAD_GATEWAY,
            );
        }
    }
}
