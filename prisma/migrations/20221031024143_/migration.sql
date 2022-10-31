-- DropForeignKey
ALTER TABLE "InteressadosOnAnuncios" DROP CONSTRAINT "InteressadosOnAnuncios_interessadoId_fkey";

-- AddForeignKey
ALTER TABLE "InteressadosOnAnuncios" ADD CONSTRAINT "InteressadosOnAnuncios_interessadoId_fkey" FOREIGN KEY ("interessadoId") REFERENCES "Interessado"("id") ON DELETE CASCADE ON UPDATE CASCADE;
