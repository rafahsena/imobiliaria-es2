import { Anuncio, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const cadastrarAnuncio = async (anuncio: Anuncio) => {
  return await prisma.anuncio.create({
    data: anuncio,
  });
};

export const getAnuncio = async (id: number) => {
  return await prisma.anuncio.findFirst({ where: { id } })
}

export const alterarAnuncio = async (id: number, anuncio: Anuncio) => {
  return await prisma.anuncio.update({ where: { id }, data: {
    titulo: anuncio.titulo,
    descricao: anuncio.descricao,
    valor: anuncio.valor,
    tipo: anuncio.tipo,
  } });
};

export const listarAnuncios = async () => {
  return await prisma.anuncio.findMany();
};