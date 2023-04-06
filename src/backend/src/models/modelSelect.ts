import {
    Injectable,
    HttpException,
    HttpStatus,
    NotAcceptableException,
} from '@nestjs/common';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) {}

    async getAllProjects() {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    isApproved: true,
                },
                select: {
                    id: true,
                    idUser: true,
                    name: true,
                    description: true,
                    duration: true,
                    status: true,
                    aplicationDeadLine: true,
                    dateStart: true,
                    User: {
                        select: {
                            fullName: true,
                        },
                    },
                    projectTag: {
                        select: {
                            Tag: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },

                    projectRole: {
                        select: {
                            Role: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },

                    userApplyProject: {
                        select: {
                            idUser: true,
                        },
                    },
                },
            });

            const jsonResult = result.map((item) => {
                return {
                    id: item.id,
                    idUser: item.idUser,
                    name: item.name,
                    description: item.description,
                    duration: item.duration,
                    status: item.status,
                    aplicationDeadLine: item.aplicationDeadLine,
                    dateStart: item.dateStart,
                    leader: item.User.fullName,
                    projectTag: item.projectTag.map((item) => {
                        return item.Tag.name;
                    }),
                    projectRole: item.projectRole.map((item) => {
                        return { id: item.Role.id, name: item.Role.name };
                    }),
                    userApplyProject: item.userApplyProject.map((item) => {
                        return { id: item.idUser };
                    }),
                };
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
                    Project: true,
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
                select: {
                    id: true,
                    idUser: true,
                    name: true,
                    isApproved: true,
                    description: true,
                    duration: true,
                    status: true,
                    aplicationDeadLine: true,
                    dateStart: true,

                    projectTag: {
                        select: {
                            Tag: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },

                    projectRole: {
                        select: {
                            Role: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                    userApplyProject: {
                        select: {
                            User: {
                                select: {
                                    fullName: true,
                                    id: true,
                                    userApplyProject: {
                                        select: { idRole: true, Role: true },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            const jsonResult = result.map((item) => {
                return {
                    id: item.id,
                    idUser: item.idUser,
                    name: item.name,
                    isApproved: item.isApproved,
                    description: item.description,
                    duration: item.duration,
                    status: item.status,
                    aplicationDeadLine: item.aplicationDeadLine,
                    dateStart: item.dateStart,
                    projectTag: item.projectTag.map((item) => {
                        return item.Tag.name;
                    }),
                    projectRole: item.projectRole.map((item) => {
                        return { id: item.Role.id, name: item.Role.name };
                    }),
                    users: item.userApplyProject.map((item) => {
                        return {
                            id: item.User.id,
                            name: item.User.fullName,
                            role: item.User.userApplyProject[0].Role.name,
                        };
                    }),
                };
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

    async getUserById(idUser: number) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { id: idUser },
            });

            return user;
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

    async findLeaderEmailByIdProject(projectId: number) {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    id: projectId,
                },
                select: {
                    name: true,
                    User: { select: { email: true, fullName: true } },
                },
            });
            const jsonResult = result.map((item) => {
                return {
                    name: item.name,
                    email: item.User.email,
                    fullName: item.User.fullName,
                };
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

    async getCheckExistentUsers(idUser: number) {
        try {
            const result = await this.prisma.user.findUnique({
                where: {
                    id: idUser,
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

    async getExistUserAndProjectInSaveProject(
        idProject: number,
        idUser: number,
    ) {
        try {
            const result = await this.prisma.saveProject.findMany({
                where: {
                    idProject: idProject,
                    idUser: idUser,
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

    async getExistUserInSaveProject(idUser: number) {
        try {
            const result = await this.prisma.saveProject.findMany({
                where: {
                    idUser: idUser,
                },
                select: {
                    Project: true,
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

    async findUserApplyProjectByIdUserAndIdProject(
        idProject: number,
        idUser: number,
        idRole: number,
    ) {
        try {
            const result = await this.prisma.userApplyProject.findMany({
                where: {
                    idProject,
                    idRole,
                    idUser,
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

    async findUserApprovedInfo(idUsers: number[], idProject: number) {
        try {
            const result = await this.prisma.user.findMany({
                where: {
                    id: { in: idUsers },
                },
                select: {
                    fullName: true,
                    email: true,
                    userApplyProject: {
                        where: {
                            idProject: idProject,
                        },
                        select: {
                            Project: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
                },
            });
            const jsonResult = result.map((item) => {
                return {
                    fullname: item.fullName,
                    email: item.email,
                    projectName: item.userApplyProject[0].Project.name,
                };
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

    async findUserApplyProjectByIdRoleAndIdProject(
        idRole: number,
        idProject: number,
    ) {
        try {
            const result = await this.prisma.projectRole.findMany({
                where: {
                    idProject,
                    idRole,
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

    async findUserApplyProjectExistUser(idUser: number) {
        try {
            const result = await this.prisma.user.findMany({
                where: {
                    id: idUser,
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

    async findUserApplyProjectExistProject(project: number) {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    id: project,
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

    async findUserApplyProjectExistRole(role: number) {
        try {
            const result = await this.prisma.role.findMany({
                where: {
                    id: role,
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

    async getUserByEmail(email: string) {
        try {
            const result = await this.prisma.user.findMany({
                where: {
                    email: email,
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

    async getProjectByOwnerId(idOwner: number) {
        try {
            const result = await this.prisma.project.findMany({
                where: {
                    idManager: idOwner,
                },
                select: {
                    id: true,
                    idUser: true,
                    name: true,
                    isApproved: true,
                    description: true,
                    duration: true,
                    status: true,
                    aplicationDeadLine: true,
                    dateStart: true,
                    User: {
                        select: {
                            fullName: true,
                        },
                    },
                    projectTag: {
                        select: {
                            Tag: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },

                    projectRole: {
                        select: {
                            Role: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },

                    userApplyProject: {
                        select: {
                            idUser: true,
                        },
                    },
                },
            });

            const jsonResult = result.map((item) => {
                return {
                    id: item.id,
                    idUser: item.idUser,
                    name: item.name,
                    isApproved: item.isApproved,
                    description: item.description,
                    duration: item.duration,
                    status: item.status,
                    aplicationDeadLine: item.aplicationDeadLine,
                    dateStart: item.dateStart,
                    leader: item.User.fullName,
                    projectTag: item.projectTag.map((item) => {
                        return item.Tag.name;
                    }),
                    projectRole: item.projectRole.map((item) => {
                        return { id: item.Role.id, name: item.Role.name };
                    }),
                    userApplyProject: item.userApplyProject.map((item) => {
                        return { id: item.idUser };
                    }),
                };
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

    async getProjectsAppliedById(id: number) {
        try {
            const result = await this.prisma.userApplyProject.findMany({
                where: {
                    idUser: id,
                },
                select: {
                    Project: {
                        select: {
                            id: true,
                            idUser: true,
                            name: true,
                            isApproved: true,
                            description: true,
                            duration: true,
                            status: true,
                            aplicationDeadLine: true,
                            dateStart: true,

                            projectTag: {
                                select: {
                                    Tag: {
                                        select: {
                                            name: true,
                                        },
                                    },
                                },
                            },

                            projectRole: {
                                select: {
                                    Role: {
                                        select: {
                                            id: true,
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    idUser: true,
                },
            });

            const jsonResult = result.map((item) => {
                return {
                    id: item.Project.id,
                    idUser: item.Project.idUser,
                    name: item.Project.name,
                    isApproved: item.Project.isApproved,
                    description: item.Project.description,
                    duration: item.Project.duration,
                    status: item.Project.status,
                    aplicationDeadLine: item.Project.aplicationDeadLine,
                    dateStart: item.Project.dateStart,

                    projectTag: item.Project.projectTag.map((item) => {
                        return item.Tag.name;
                    }),

                    projectRole: item.Project.projectRole.map((item) => {
                        return { id: item.Role.id, name: item.Role.name };
                    }),
                };
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
}
