-- CreateTable
CREATE TABLE "devs" (
    "id" SERIAL NOT NULL,
    "nivel" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "datanascimento" TIMESTAMP(3) NOT NULL,
    "idade" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,

    CONSTRAINT "devs_pkey" PRIMARY KEY ("id")
);
