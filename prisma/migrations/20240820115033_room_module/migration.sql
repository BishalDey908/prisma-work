/*
  Warnings:

  - You are about to drop the `Admin_loginInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Admin_loginInfo";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "room_module" (
    "id" SERIAL NOT NULL,
    "Room_Name" TEXT NOT NULL,
    "Room_Code" INTEGER NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "Gender" TEXT NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "room_module_pkey" PRIMARY KEY ("id")
);
