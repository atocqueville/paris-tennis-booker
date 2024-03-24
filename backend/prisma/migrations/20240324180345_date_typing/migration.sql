/*
  Warnings:

  - You are about to alter the column `startDate` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - Made the column `startDate` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Booking" ("id", "location", "startDate", "status") SELECT "id", "location", "startDate", "status" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
