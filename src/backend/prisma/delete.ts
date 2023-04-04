import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.projectRole.deleteMany({});
    await prisma.projectTag.deleteMany({});
    await prisma.saveProject.deleteMany({});
    await prisma.userApplyProject.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.project.deleteMany({});
    await prisma.tag.deleteMany({});
    await prisma.role.deleteMany({});
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
