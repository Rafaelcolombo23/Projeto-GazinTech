/*
  Warnings:

  - You are about to drop the column `nivel` on the `devs` table. All the data in the column will be lost.
  - Added the required column `nivel_id` to the `devs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "devs" DROP COLUMN "nivel",
ADD COLUMN     "nivel_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "niveis" (
    "id" SERIAL NOT NULL,
    "nivel" TEXT NOT NULL,

    CONSTRAINT "niveis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "devs" ADD CONSTRAINT "devs_nivel_id_fkey" FOREIGN KEY ("nivel_id") REFERENCES "niveis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
