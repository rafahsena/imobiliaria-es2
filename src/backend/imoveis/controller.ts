import {PrismaClient} from '@prisma/client'
import { NextApiResponse,NextApiRequest } from 'next'

const prisma = new PrismaClient();

export const getImoveis = async (req: NextApiRequest, res: NextApiResponse) => {
  const imoveis = await prisma.imovel.findMany();
  res.status(200).json(imoveis)
  await prisma.$disconnect()
}