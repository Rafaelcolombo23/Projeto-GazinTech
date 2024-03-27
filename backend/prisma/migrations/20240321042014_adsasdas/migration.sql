/*
  Warnings:

  - The primary key for the `devs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `devs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "devs" DROP CONSTRAINT "devs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_devs" SERIAL NOT NULL,
ADD CONSTRAINT "devs_pkey" PRIMARY KEY ("id_devs");
