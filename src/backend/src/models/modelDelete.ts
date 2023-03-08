import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
