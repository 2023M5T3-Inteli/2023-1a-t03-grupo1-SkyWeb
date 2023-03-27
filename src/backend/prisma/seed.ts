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
            isManager: true,
        },
    });

    await prisma.user.create({
        data: {
            id: 3,
            fullName: 'Diego souza',
            email: 'diegosouza@dell.com',
            phoneNumber: 123456789,
            mobileNumber: 1123,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
        },
    });

    await prisma.user.create({
        data: {
            id: 4,
            fullName: 'gabriela lima',
            email: 'gabielalima@dell.com',
            phoneNumber: 123456789,
            mobileNumber: 1124,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
        },
    });

    await prisma.user.create({
        data: {
            id: 5,
            fullName: 'Pedro ninja',
            email: 'pedroninja@dell.com',
            phoneNumber: 123456789,
            mobileNumber: 1125,
            location: 'Remote Employee - Brazil, Rio Grande do Sul',
            job: 'Software Enginer',
            isManager: false,
        },
    });

    await prisma.project.create({
        data: {
            id: 1,
            name: 'projeto 1',
            description: 'lorem lorem lorem lorem lorem lorem lorem',
            aplicationDeadLine: new Date('August 19,2023'),
            duration: '5 semanas',
            status: 'Open',
            dateStart: new Date('August 27,2023'),
            idUser: 4,
            idManager: 1,
        },
    });

    await prisma.project.create({
        data: {
            id: 2,
            name: 'projeto 2',
            description: 'lorem lorem lorem lorem lorem lorem lorem',
            aplicationDeadLine: new Date('August 19,2023'),
            duration: '10 semanas',
            status: '',
            dateStart: new Date('August 27,2023'),
            idUser: 5,
            idManager: 1,
        },
    });

    await prisma.project.create({
        data: {
            id: 3,
            name: 'projeto 3',
            description: 'lorem lorem lorem lorem lorem lorem lorem',
            aplicationDeadLine: new Date('August 19,2023'),
            duration: '10 semanas',
            status: '',
            dateStart: new Date('August 27,2023'),
            idUser: 3,
            idManager: 1,
            isApproved: true
        },
    });

    await prisma.project.create({
        data: {
            id: 4,
            name: 'projeto 4',
            description: 'lorem lorem lorem lorem lorem lorem lorem',
            aplicationDeadLine: new Date('August 19,2023'),
            duration: '10 semanas',
            status: '',
            dateStart: new Date('August 27,2023'),
            idManager: 1,
            idUser: 3
        },
    });

    await prisma.project.create({
        data: {
            id: 5,
            name: 'projeto 5',
            description: 'lorem lorem lorem lorem lorem lorem lorem',
            aplicationDeadLine: new Date('August 19,2023'),
            duration: '12 semanas',
            status: '',
            dateStart: new Date('August 27,2023'),
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

    await prisma.projectRole.create({
        data: {
            idProject: 1,
            idRole: 1,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 1,
            idRole: 2,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 1,
            idRole: 3,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 2,
            idRole: 1,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 2,
            idRole: 4,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 2,
            idRole: 5,
        },
    });

    await prisma.projectRole.create({
        data: {
            idProject: 3,
            idRole: 2,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 1,
            idTag: 1,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 1,
            idTag: 2,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 1,
            idTag: 3,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 2,
            idTag: 4,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 2,
            idTag: 5,
        },
    });

    await prisma.projectTag.create({
        data: {
            idProject: 2,
            idTag: 6,
        },
    });

    await prisma.userApplyProject.create({
        data: {
            idUser: 1,
            idProject: 1,
            idRole: 1,
        },
    });

    await prisma.userApplyProject.create({
        data: {
            idUser: 2,
            idProject: 1,
            idRole: 2,
        },
    });

    await prisma.userApplyProject.create({
        data: {
            idUser: 3,
            idProject: 1,
            idRole: 3,
        },
    });

    await prisma.userApplyProject.create({
        data: {
            idUser: 2,
            idProject: 3,
            idRole: 2,
        },
    });

    await prisma.userApplyProject.create({
        data: {
            idUser: 4,
            idProject: 3,
            idRole: 2,
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
