-- DropForeignKey
ALTER TABLE "project" DROP CONSTRAINT "project_idUser_fkey";

-- DropForeignKey
ALTER TABLE "projectRole" DROP CONSTRAINT "projectRole_idProject_fkey";

-- DropForeignKey
ALTER TABLE "projectRole" DROP CONSTRAINT "projectRole_idRole_fkey";

-- DropForeignKey
ALTER TABLE "projectTag" DROP CONSTRAINT "projectTag_idProject_fkey";

-- DropForeignKey
ALTER TABLE "projectTag" DROP CONSTRAINT "projectTag_idTag_fkey";

-- DropForeignKey
ALTER TABLE "saveProject" DROP CONSTRAINT "saveProject_idProject_fkey";

-- DropForeignKey
ALTER TABLE "saveProject" DROP CONSTRAINT "saveProject_idUser_fkey";

-- DropForeignKey
ALTER TABLE "userApplyProject" DROP CONSTRAINT "userApplyProject_idProject_fkey";

-- DropForeignKey
ALTER TABLE "userApplyProject" DROP CONSTRAINT "userApplyProject_idRole_fkey";

-- DropForeignKey
ALTER TABLE "userApplyProject" DROP CONSTRAINT "userApplyProject_idUser_fkey";

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
