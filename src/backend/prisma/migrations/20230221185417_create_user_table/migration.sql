-- CreateTable
CREATE TABLE "user" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "job" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
