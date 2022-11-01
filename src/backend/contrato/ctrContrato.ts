import { PrismaClient, Contrato, Cliente, Endereco } from "@prisma/client";

const prisma = new PrismaClient();

export const listarContratos = async () => {
  return await prisma.contrato.findMany();
};

export const getContrato = async (id: number) => {
  return await prisma.contrato.findFirst({
    where: { id },
    include: {
      cliente: true,
      imovel: { include: { endereco: true, funcionario: true } },
    },
  });
};

export const emitirContrato = async (body: {
  contrato: Contrato;
  cliente: Cliente;
  endereco: Endereco;
}) => {
  const endereco = await prisma.endereco.create({
    data: body.endereco,
  });

  const cliente = await prisma.cliente.create({
    data: { ...body.cliente, enderecoId: endereco.id },
  });

  const contrato = await prisma.contrato.create({
    data: { ...body.contrato, clienteId: cliente.id },
  });

  const imovel = await prisma.imovel.findFirst({
    where: { id: body.contrato.imovelId },
  });
  const enderecoImovel = await prisma.endereco.findFirst({
    where: { id: imovel?.enderecoId },
  });

  return { contrato, cliente, endereco, enderecoImovel };
};

export const revogarContrato = async (id: number) => {
  return await prisma.contrato.update({
    where: { id },
    data: {
      vencimento: new Date(),
    },
  });
};

export const alterarContrato = async (id: number, contrato: Contrato) => {
  const contratoResponse = await prisma.contrato.update({
    where: { id },
    data: {
      valor: contrato.valor,
      vencimento: contrato.vencimento,
      tipo: contrato.tipo,
      dataAssinatura: contrato.dataAssinatura,
    },
  });

  return contratoResponse;
};
