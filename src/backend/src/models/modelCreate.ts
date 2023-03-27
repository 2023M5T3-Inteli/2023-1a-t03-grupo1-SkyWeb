import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { Tproject } from '../Project/createProject/types/TmodelCreate';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelCreate {
    constructor(private readonly prisma: PrismaService) { }

    async createProject(data: Tproject) {
        const {
            name,
            description,
            aplicationDeadLine,
            dateStart,
            duration,
            status,
            idUser,
            idManager,
        } = data;

        try {
            const result = await this.prisma.project.create({
                data: {
                    name: name,
                    description: description,
                    aplicationDeadLine: new Date(aplicationDeadLine),
                    dateStart: new Date(dateStart),
                    duration: duration,
                    status: status,

                    idUser: idUser,
                    idManager: idManager,
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

    async connectTagsProject(idProject: number, idTag: number) {
        try {
            const result = await this.prisma.projectTag.create({
                data: {
                    idProject: idProject,
                    idTag: idTag,
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

    async connectRolesProject(idProject: number, idRole: number) {
        try {
            const result = await this.prisma.projectRole.create({
                data: {
                    idProject: idProject,
                    idRole: idRole,
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

    async saveProject(idProject: number, idUser: number) {
        try {
            const result = await this.prisma.saveProject.create({
                data: {
                    idProject: idProject,
                    idUser: idUser
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error
                },
                HttpStatus.BAD_REQUEST
            );
        }
    }


    async applyProject(idProject: number, idUser: number, idRole: number) {
        const result = await this.prisma.userApplyProject.create({
            data: {
                idProject: idProject,
                idUser: idUser,
                idRole: idRole
            }
        })

        return result

    }
}

