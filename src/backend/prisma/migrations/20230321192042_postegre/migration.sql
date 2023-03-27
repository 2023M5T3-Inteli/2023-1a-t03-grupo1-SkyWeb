-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "isManager" BOOLEAN,
    "idManager" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" TIMESTAMP(3) NOT NULL,
    "isApproved" BOOLEAN,
    "idUser" INTEGER,
    "idManager" INTEGER,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userApplyProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idRole" INTEGER NOT NULL,

    CONSTRAINT "userApplyProject_pkey" PRIMARY KEY ("idUser","idProject","idRole")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectRole" (
    "idRole" INTEGER NOT NULL,
    "idProject" INTEGER NOT NULL,

    CONSTRAINT "projectRole_pkey" PRIMARY KEY ("idRole","idProject")
);

-- CreateTable
CREATE TABLE "saveProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "saveProject_pkey" PRIMARY KEY ("idUser","idProject")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectTag" (
    "idProject" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    CONSTRAINT "projectTag_pkey" PRIMARY KEY ("idProject","idTag")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userApplyProject" ADD CONSTRAINT "userApplyProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectRole" ADD CONSTRAINT "projectRole_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProject" ADD CONSTRAINT "saveProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projectTag" ADD CONSTRAINT "projectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
