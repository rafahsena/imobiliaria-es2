import { Imovel, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listarImoveis = async () => {
  return await prisma.imovel.findMany();
};

export const getImovel = async (id: number) => {
  return await prisma.imovel.findFirst({where: {id}});
}

export const alterarImovel = async (id: number, imovel: Imovel) => {
  return await prisma.imovel.update({ where: { id }, data: {
    disponivel: imovel.disponivel,
    area: imovel.area,
    enderecoId: imovel.enderecoId,
    iptu: imovel.iptu,
    tipoId: imovel.tipoId
  } });
}

export const cadastrarImovel = async (imovel: Imovel) => {
  return await prisma.imovel.create({
    data: imovel,
  });
};
