import { Endereco, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const cadastrarEndereco = async (endereco: Endereco) => {
  return await prisma.endereco.create({
    data: endereco,
  });
};

export const getEndereco = async (id: number) => {
  return await prisma.endereco.findFirst({ where: { id } });
};
