-- DropForeignKey
ALTER TABLE "Anuncio" DROP CONSTRAINT "Anuncio_imovelId_fkey";

-- DropForeignKey
ALTER TABLE "Contrato" DROP CONSTRAINT "Contrato_imovelId_fkey";

-- DropForeignKey
ALTER TABLE "Imovel" DROP CONSTRAINT "Imovel_funcionarioId_fkey";

-- DropForeignKey
ALTER TABLE "InteressadosOnAnuncios" DROP CONSTRAINT "InteressadosOnAnuncios_anuncioId_fkey";

-- AddForeignKey
ALTER TABLE "Imovel" ADD CONSTRAINT "Imovel_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anuncio" ADD CONSTRAINT "Anuncio_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InteressadosOnAnuncios" ADD CONSTRAINT "InteressadosOnAnuncios_anuncioId_fkey" FOREIGN KEY ("anuncioId") REFERENCES "Anuncio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contrato" ADD CONSTRAINT "Contrato_imovelId_fkey" FOREIGN KEY ("imovelId") REFERENCES "Imovel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
