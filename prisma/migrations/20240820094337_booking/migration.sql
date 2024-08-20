/*
  Warnings:

  - Made the column `password` on table `Admin_loginInfo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Admin_loginInfo" ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "Booking" (
    "Name" SERIAL NOT NULL,
    "Email_Address" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "Select_Flight" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("Name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_Email_Address_key" ON "Booking"("Email_Address");
