import { Imovel, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarImoveis = async () => {
  return await prisma.imovel.findMany();
};

export const cadastrarImovel = async (imovel: Imovel) => {
  return await prisma.imovel.create({
    data: imovel,
  });
};
