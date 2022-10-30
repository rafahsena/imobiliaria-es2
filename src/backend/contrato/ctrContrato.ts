import { PrismaClient, Contrato } from "@prisma/client";

const prisma = new PrismaClient();

export const listarContratos = async () => {
  return await prisma.contrato.findMany();
}

export const getContrato = async (id: number) => {
  return await prisma.contrato.findFirst({where: {id}});
}

export const emitirContrato = async (contrato: Contrato) => {
  return await prisma.contrato.create({
    data: contrato,
  });
};

export const revogarContrato = async (id: number) => {
  return await prisma.contrato.update({ where: { id }, data: {
    vencimento: new Date(),
  }})
}

export const alterarContrato = async (id: number, contrato: Contrato) => {
  return await prisma.contrato.update({ where: { id }, data: {
    valor: contrato.valor,
    vencimento: contrato.vencimento,
    tipo: contrato.tipo,
    imovelId: contrato.imovelId,
  } });
};