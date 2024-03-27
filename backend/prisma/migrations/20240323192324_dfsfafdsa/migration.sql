/*
  Warnings:

  - The primary key for the `devs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `niveis` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "devs" DROP CONSTRAINT "devs_nivel_id_fkey";

-- AlterTable
ALTER TABLE "devs" DROP CONSTRAINT "devs_pkey",
ALTER COLUMN "nivel_id" SET DATA TYPE TEXT,
ALTER COLUMN "id_devs" DROP DEFAULT,
ALTER COLUMN "id_devs" SET DATA TYPE TEXT,
ADD CONSTRAINT "devs_pkey" PRIMARY KEY ("id_devs");
DROP SEQUENCE "devs_id_devs_seq";

-- AlterTable
ALTER TABLE "niveis" DROP CONSTRAINT "niveis_pkey",
ALTER COLUMN "id_nivel" DROP DEFAULT,
ALTER COLUMN "id_nivel" SET DATA TYPE TEXT,
ADD CONSTRAINT "niveis_pkey" PRIMARY KEY ("id_nivel");
DROP SEQUENCE "niveis_id_nivel_seq";

-- AddForeignKey
ALTER TABLE "devs" ADD CONSTRAINT "devs_nivel_id_fkey" FOREIGN KEY ("nivel_id") REFERENCES "niveis"("id_nivel") ON DELETE RESTRICT ON UPDATE CASCADE;
