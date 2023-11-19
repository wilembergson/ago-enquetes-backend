/*
  Warnings:

  - You are about to drop the column `name` on the `medico` table. All the data in the column will be lost.
  - Added the required column `nome` to the `medico` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "medico_crm_key";

-- AlterTable
ALTER TABLE "medico" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL;
