import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelUpdate {
    constructor(private prisma: PrismaService) { }

    async updateProjectStatus(progress: string, idProject: number) {
        try {
            const result = await this.prisma.project.update({
                data: {
                    status: progress,
                },
                where: {
                    id: idProject,
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

    async updateApprovalProject(isApproved: boolean, idProject: number) {
        try {
            const result = await this.prisma.project.update({
                data: {
                    isApproved: isApproved,
                },
                where: {
                    id: idProject,
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
}
