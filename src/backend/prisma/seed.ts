import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            id: 1,
            fullName: 'Gustavo lion',
            email: 'gustavolion@dell.com',
            phoneNumber: 123456789,
            mobileNumber: 1121,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: true,
            idManager: 1,
        },
    });

    await prisma.user.create({
        data: {
            id: 2,
            fullName: 'laura silva',
            email: 'laurasilva@dell.com',
            phoneNumber: 123456789,
            mobileNumber: 1122,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
            idManager: 1,
        },
    });

    await prisma.tag.create({
        data: {
            id: 1,
            name: 'HTML',
        },
    });

    await prisma.tag.create({
        data: {
            id: 2,
            name: 'CSS',
        },
    });

    await prisma.tag.create({
        data: {
            id: 3,
            name: 'JavaScript',
        },
    });

    await prisma.tag.create({
        data: {
            id: 4,
            name: 'Bootstrap',
        },
    });

    await prisma.tag.create({
        data: {
            id: 5,
            name: 'SQL',
        },
    });

    await prisma.tag.create({
        data: {
            id: 6,
            name: 'Java',
        },
    });

    await prisma.tag.create({
        data: {
            id: 7,
            name: 'C#',
        },
    });

    await prisma.tag.create({
        data: {
            id: 8,
            name: 'Python',
        },
    });

    await prisma.tag.create({
        data: {
            id: 9,
            name: 'Node.js',
        },
    });

    await prisma.tag.create({
        data: {
            id: 10,
            name: 'MongoDB',
        },
    });

    await prisma.tag.create({
        data: {
            id: 11,
            name: 'React',
        },
    });

    await prisma.role.create({
        data: {
            id: 1,
            name: 'Design UX',
        },
    });

    await prisma.role.create({
        data: {
            id: 2,
            name: 'Design UI',
        },
    });

    await prisma.role.create({
        data: {
            id: 3,
            name: 'Tech leader',
        },
    });

    await prisma.role.create({
        data: {
            id: 4,
            name: 'Front-end',
        },
    });

    await prisma.role.create({
        data: {
            id: 5,
            name: 'Back-end',
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
