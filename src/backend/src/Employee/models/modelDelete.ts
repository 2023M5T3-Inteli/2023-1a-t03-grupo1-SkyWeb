import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaServices/prisma.service';

export class ModelDelete {
    constructor(private prisma: PrismaService) {}

    deleteProject() {
        // this.prisma.projec.delete;
    }
}
