/*
  Warnings:

  - You are about to drop the column `nivel` on the `niveis` table. All the data in the column will be lost.
  - Added the required column `name` to the `niveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "niveis" DROP COLUMN "nivel",
ADD COLUMN     "name" TEXT NOT NULL;
