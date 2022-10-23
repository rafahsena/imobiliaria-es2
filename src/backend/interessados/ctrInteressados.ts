import { Interessado, InteressadosOnAnuncios, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarInteressados = async (id: number) => {
  return await prisma.interessadosOnAnuncios.findMany({ where: { anuncioId: id } });
};

export const demonstrarInteresse = async (data: Interessado, id: number) => {
  const interessado = await prisma.interessado.create({ data });
  await prisma.interessadosOnAnuncios.create({ data: 
    { anuncioId: id, interessadoId: interessado.id, assignedAt: new Date() } 
  })
}

export const deletarInteressado = async (id: number) => {
  await prisma.interessado.delete({ where: { id } })
}