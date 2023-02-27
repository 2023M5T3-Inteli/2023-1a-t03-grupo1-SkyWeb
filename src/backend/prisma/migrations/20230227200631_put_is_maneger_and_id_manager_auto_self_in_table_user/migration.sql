/*
  Warnings:

  - You are about to drop the `manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `isAproved` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `manager` on the `user` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "manager";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" DATETIME NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "isApproved" BOOLEAN,
    "idUser" INTEGER,
    "idManager" INTEGER,
    CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_project" ("aplicationDeadLine", "dateStart", "description", "duration", "id", "idManager", "idUser", "name", "status") SELECT "aplicationDeadLine", "dateStart", "description", "duration", "id", "idManager", "idUser", "name", "status" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "isManager" BOOLEAN,
    "idManager" INTEGER
);
INSERT INTO "new_user" ("email", "fullName", "id", "job", "location", "mobileNumber", "phoneNumber") SELECT "email", "fullName", "id", "job", "location", "mobileNumber", "phoneNumber" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
