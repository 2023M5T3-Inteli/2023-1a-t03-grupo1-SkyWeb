/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idUser` on the `user` table. All the data in the column will be lost.
  - Added the required column `id` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manager` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "manager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" DATETIME NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "isAproved" BOOLEAN NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idManager" INTEGER NOT NULL,
    CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "project_idManager_fkey" FOREIGN KEY ("idManager") REFERENCES "manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "userApplyProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idRole" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idProject", "idRole"),
    CONSTRAINT "userApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userApplyProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "userWorkingProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idRole" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idProject", "idRole"),
    CONSTRAINT "userWorkingProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userWorkingProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userWorkingProject_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "projectRole" (
    "idRole" INTEGER NOT NULL,
    "idProject" INTEGER NOT NULL,

    PRIMARY KEY ("idRole", "idProject"),
    CONSTRAINT "projectRole_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "projectRole_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "saveProject" (
    "idProject" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idProject"),
    CONSTRAINT "saveProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "saveProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "projectTag" (
    "idProject" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idProject", "idTag"),
    CONSTRAINT "projectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "projectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "manager" INTEGER NOT NULL,
    CONSTRAINT "user_manager_fkey" FOREIGN KEY ("manager") REFERENCES "manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user" ("email", "fullName", "job", "location", "mobileNumber", "phoneNumber") SELECT "email", "fullName", "job", "location", "mobileNumber", "phoneNumber" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
