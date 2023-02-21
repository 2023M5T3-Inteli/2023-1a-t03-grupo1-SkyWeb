-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT,
    "email" TEXT,
    "phoneNumber" INTEGER,
    "mobileNumber" INTEGER,
    "location" TEXT,
    "job" TEXT,
    "manager" INTEGER NOT NULL,
    CONSTRAINT "user_manager_fkey" FOREIGN KEY ("manager") REFERENCES "manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user" ("email", "fullName", "id", "job", "location", "manager", "mobileNumber", "phoneNumber") SELECT "email", "fullName", "id", "job", "location", "manager", "mobileNumber", "phoneNumber" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_mobileNumber_key" ON "user"("mobileNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
