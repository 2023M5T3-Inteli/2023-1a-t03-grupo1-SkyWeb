import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';
import { Tproject } from '../types/TmodelCreate';

@Injectable()
export class ModelCreate {
    constructor(private readonly prisma: PrismaService) {}

    async createProject(data: Tproject) {
        const {
            name,
            description,
            aplicationDeadLine,
            dateStart,
            duration,
            isAproved,
            status,
            idUser,
            idManager,
            idProject,
        } = data;

        const result = await this.prisma.project.create({
            data: {
                name: name,
                description: description,
                aplicationDeadLine: new Date(aplicationDeadLine),
                dateStart: new Date(dateStart),
                duration: duration,
                isApproved: isAproved,
                status: status,

                idUser: idUser,
                idManager: idManager,
            },
        });

        return result;
    }

    async connectTagsProject(idProject: number, idTag: number) {
        const result = await this.prisma.projectTag.create({
            data: {
                idProject: idProject,
                idTag: idTag,
            },
        });
        return result;
    }

    async connectRolesProject(idProject: number, idRole: number) {
        const result = await this.prisma.projectRole.create({
            data: {
                idProject: idProject,
                idRole: idRole,
            },
        });
        return result;
    }
}
