import { Interessado, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarInteressados = async (id: number) => {
  const interessadosOnAnuncio = await prisma.interessadosOnAnuncios.findMany({
    where: { anuncioId: id },
    include: { interessado: true },
  });
  return interessadosOnAnuncio.map((interessadoOnAnuncio) => {
    return { ...interessadoOnAnuncio.interessado };
  });
};

export const demonstrarInteresse = async (
  interessado: Interessado,
  anuncioId: number
) => {
  const { id: interessadoId } = await prisma.interessado.create({
    data: {
      nome: interessado.nome,
      email: interessado.email,
      telefone: interessado.telefone,
    },
  });
  const interessadoOnAn = await prisma.interessadosOnAnuncios.create({
    data: { anuncioId, interessadoId },
  });
  return interessadoOnAn;
};

export const removerInteressado = async (id: number) => {
  return await prisma.interessado.delete({ where: { id } });
};
