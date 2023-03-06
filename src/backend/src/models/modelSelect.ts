import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';


@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) {}

    
    async getAllProjects() {
        return await this.prisma.project.findMany({
            where:{
                isApproved:true,
            }
        });
    }
    
    async findProjectById(projectId: number) {
        return await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
    }
}
