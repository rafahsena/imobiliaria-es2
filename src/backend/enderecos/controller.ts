import {PrismaClient} from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export const getEnderecos = async (req: NextApiRequest, res: NextApiResponse) => {
  const enderecos = await prisma.endereco.findMany();
  res.status(200).json(enderecos)
  await prisma.$disconnect()
}