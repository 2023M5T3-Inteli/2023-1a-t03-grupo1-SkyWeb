import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

@Injectable()
export class ModelSelect {
    constructor(private prisma: PrismaService) { }

    async findProjectById(projectId: number) {
        return await this.prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });
    }
    async filterTag(tag: Array<number> ) {
        const result = await this.prisma.projectTag.findMany({
            where: {
                idTag: { in: tag },
                Project: { isApproved: null,status:"Open"}
                
            },
            select: {
                Project: { select: { name:true,description:true,aplicationDeadLine:true,duration:true,dateStart:true,isApproved:true,status:true,}}
            }
        });
        return result;
    }
    async getAllTags() {
        const result = await this.prisma.tag.findMany({
            select:{id:true}
        });
        return result;
    }
}
