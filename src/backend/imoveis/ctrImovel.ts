import { Imovel, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarImoveis = async (funcionarioId?) => {
  const query = {
    where: {},
    include: { endereco: true, tipo: true },
  };
  if (funcionarioId) query.where = { funcionarioId };
  return await prisma.imovel.findMany(query);
};

export const getImovel = async (id: number) => {
  return await prisma.imovel.findFirst({
    where: { id },
    include: { endereco: true, tipo: true },
  });
};

export const alterarImovel = async (id: number, imovel: Imovel) => {
  return await prisma.imovel.update({
    where: { id },
    data: {
      disponivel: imovel.disponivel,
      area: imovel.area,
      enderecoId: imovel.enderecoId,
      iptu: imovel.iptu,
      tipoId: imovel.tipoId,
    },
  });
};

export const cadastrarImovel = async (imovel: Imovel) => {
  return await prisma.imovel.create({
    data: imovel,
  });
};
