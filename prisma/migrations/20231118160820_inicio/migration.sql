-- CreateTable
CREATE TABLE "medico" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "crm" TEXT NOT NULL,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "medico_crm_key" ON "medico"("crm");
