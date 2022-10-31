import { PrismaClient, Contrato, Cliente, Endereco } from "@prisma/client";

const prisma = new PrismaClient();

export const listarContratos = async () => {
  return await prisma.contrato.findMany();
}

export const getContrato = async (id: number) => {
  return await prisma.contrato.findFirst({where: {id}, select: {
    cliente: true,
    imovel: { select: { endereco: true, funcionario: true } },
  }});
}

export const emitirContrato = async (body: {contrato: Contrato, cliente: Cliente, endereco: Endereco}) => {
  const endereco = await prisma.endereco.create({
    data: body.endereco
  })

  const cliente = await prisma.cliente.create({
    data: {...body.cliente, enderecoId: endereco.id}
  })

  const contrato = await prisma.contrato.create({
    data: { ...body.contrato, clienteId: cliente.id }
  });

  return { endereco, cliente, contrato }
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