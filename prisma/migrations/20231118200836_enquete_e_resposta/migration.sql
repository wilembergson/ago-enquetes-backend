/*
  Warnings:

  - A unique constraint covering the columns `[crm]` on the table `medico` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "enquetes" (
    "id" UUID NOT NULL,
    "pergunta" TEXT NOT NULL,
    "tempo_segundos" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "enquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "respostas" (
    "id" UUID NOT NULL,
    "conteudo" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "id_enquete" UUID NOT NULL,

    CONSTRAINT "respostas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "respostas_crm_key" ON "respostas"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "medico_crm_key" ON "medico"("crm");

-- AddForeignKey
ALTER TABLE "respostas" ADD CONSTRAINT "respostas_crm_fkey" FOREIGN KEY ("crm") REFERENCES "medico"("crm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "respostas" ADD CONSTRAINT "respostas_id_enquete_fkey" FOREIGN KEY ("id_enquete") REFERENCES "enquetes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
