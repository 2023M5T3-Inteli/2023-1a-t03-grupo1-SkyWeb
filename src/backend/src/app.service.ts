import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaServices/prisma.service';

@Injectable()
export class AppService {
    constructor(private prisma: PrismaService) {}

    getHello(): string {
        return 'Hello World!';
    }

    async createUser() {
        const result = await this.prisma.user.create({
            data: {
                fullName: 'asghdaghkdsa',
                email: 'ashjdaljdklsa',
                phoneNumber: 123,
                mobileNumber: 1234567890,
                location: 'Japão',
                job: 'Software enginer',
            },
        });

        return result;
    }
}
