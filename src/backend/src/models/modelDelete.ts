import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

@Injectable()
export class ModelDelete {
    constructor(private prisma: PrismaService) { }

    async deleteProject(projectId: number) {
        await this.prisma.project.delete({
            where: {
                id: projectId,
            },
        });
    }
}
