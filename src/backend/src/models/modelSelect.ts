import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) { }

    async getAllProjects() {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    isApproved: true,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async findProjectById(projectId: number) {
        try {
            const result = await this.prisma.project.findUnique({
                where: {
                    id: projectId,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
    async filterTag(tag: Array<number>) {
        try {
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
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getAllTags() {
        try {
            const result = await this.prisma.tag.findMany({
                select: { id: true, name: true },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getAllRoles() {
        try {
            const result = await this.prisma.role.findMany({
                select: { id: true, name: true },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getProjectsByUserId(idUser: number) {
        try {
            const result = await this.prisma.project.findMany({
                where: { idUser: idUser },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getAllUsersAployed(projectId: number) {
        try {
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
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async findUserApplyProjectByIdUserAndIdProject(idProject: number, idUser: number, idRole: number) {
        try {
            const result = await this.prisma.userApplyProject.findMany({
                where: {
                    idProject,
                    idRole,
                    idUser
                }
            })
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async findUserApplyProjectByIdRoleAndIdProject(idRole: number, idProject: number) {
        try {
            const result = await this.prisma.projectRole.findMany({
                where: {
                    idProject,
                    idRole
                }
            })
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async findUserApplyProjectExistUser(idUser: number) {
        try {
            const result = await this.prisma.user.findMany({
                where: {
                    id: idUser
                }
            })
            return result
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async findUserApplyProjectExistProject(project: number) {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    id: project
                }
            })
            return result
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async findUserApplyProjectExistRole(role: number) {
        try {
            const result = await this.prisma.role.findMany({
                where: {
                    id: role
                }
            })
            return result
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST
            );
        }
    }
}
