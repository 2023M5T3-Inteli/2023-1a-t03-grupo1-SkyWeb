import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

export type Tproject = {
    name: string,
    description: string,
    aplicationDeadLine: string, //Use Date-Time
    dateStart: string, //Use Date-Time
    duration: string, //Use Date-Time
    isAproved: boolean,
    status: string,

    idUser: number,
    idManager: number,
    idProject: number,

    idTag: number,
    idRole: number,
}

export type TconnectProject = {
    idProject: number,
    idTag: number,
}

@Injectable()
export class ModelCreate {
    constructor(private readonly prisma: PrismaService) { }

    async createProject(data: Tproject) {

        const { name, description, aplicationDeadLine, dateStart, duration, isAproved, status, idUser, idManager, idProject } = data

        const result = await this.prisma.project.create({
            data: {
                name: name,
                description: description,
                aplicationDeadLine: new Date(aplicationDeadLine),
                dateStart: new Date(dateStart),
                duration: duration,
                isAproved: isAproved,
                status: status,

                idUser: idUser,
                idManager: idManager,
            }
        })

        return result
    }

    async connectTagsProject(idProject: number, idTag: number) {

        const result = await this.prisma.projectTag.create({
            data: {
                idProject: idProject,
                idTag: idTag
            }
        })
        return result
    }

    async connectRolesProject(idProject: number, idRole: number) {

        const result = await this.prisma.projectRole.create({
            data: {
                idProject: idProject,
                idRole: idRole,
            }
        })
        return result
    }
}