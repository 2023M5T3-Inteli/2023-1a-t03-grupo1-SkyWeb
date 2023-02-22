/*
  Warnings:

  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fullName` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `job` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobileNumber` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
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
    "manager" INTEGER,
    CONSTRAINT "user_manager_fkey" FOREIGN KEY ("manager") REFERENCES "manager" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_user" ("email", "fullName", "id", "job", "location", "manager", "mobileNumber", "phoneNumber") SELECT "email", "fullName", "id", "job", "location", "manager", "mobileNumber", "phoneNumber" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
CREATE TABLE "new_project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aplicationDeadLine" DATETIME NOT NULL,
    "duration" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "isAproved" BOOLEAN NOT NULL,
    "idUser" INTEGER,
    "idManager" INTEGER,
    CONSTRAINT "project_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "project_idManager_fkey" FOREIGN KEY ("idManager") REFERENCES "manager" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_project" ("aplicationDeadLine", "dateStart", "description", "duration", "id", "idManager", "idUser", "isAproved", "name", "status") SELECT "aplicationDeadLine", "dateStart", "description", "duration", "id", "idManager", "idUser", "isAproved", "name", "status" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
