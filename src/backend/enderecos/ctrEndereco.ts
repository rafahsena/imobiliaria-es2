import { Endereco, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export const cadastrarEndereco = async (endereco: Endereco) => {
  return await prisma.endereco.create({
    data: endereco,
  });
};

export const getEndereco = async (id: number) => {
  return await prisma.endereco.findFirst({ where: { id } });
};

// fixme: colocar no arquivo api/enderecos/index.ts?
export const getEnderecos = async (req: NextApiRequest, res: NextApiResponse) => {
  const enderecos = await prisma.endereco.findMany();
  res.status(200).json(enderecos)
  await prisma.$disconnect()
}
