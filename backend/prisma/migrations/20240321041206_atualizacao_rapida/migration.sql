/*
  Warnings:

  - The primary key for the `niveis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `niveis` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "devs" DROP CONSTRAINT "devs_nivel_id_fkey";

-- AlterTable
ALTER TABLE "niveis" DROP CONSTRAINT "niveis_pkey",
DROP COLUMN "id",
ADD COLUMN     "id_nivel" SERIAL NOT NULL,
ADD CONSTRAINT "niveis_pkey" PRIMARY KEY ("id_nivel");

-- AddForeignKey
ALTER TABLE "devs" ADD CONSTRAINT "devs_nivel_id_fkey" FOREIGN KEY ("nivel_id") REFERENCES "niveis"("id_nivel") ON DELETE RESTRICT ON UPDATE CASCADE;
