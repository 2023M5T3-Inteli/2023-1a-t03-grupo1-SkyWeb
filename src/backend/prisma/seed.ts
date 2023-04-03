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
            name: 'HTML',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'CSS',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'JavaScript',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'Bootstrap',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'SQL',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'Java',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'C#',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'Python',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'Node.js',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'MongoDB',
        },
    });

    await prisma.tag.create({
        data: {
            name: 'React',
        },
    });

    await prisma.role.create({
        data: {
            name: 'Design UX',
        },
    });

    await prisma.role.create({
        data: {
            name: 'Design UI',
        },
    });

    await prisma.role.create({
        data: {
            name: 'Tech leader',
        },
    });

    await prisma.role.create({
        data: {
            name: 'Front-end',
        },
    });

    await prisma.role.create({
        data: {
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
