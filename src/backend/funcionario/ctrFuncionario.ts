import { Funcionario, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

export const listarFuncionarios = async () => {
  return await prisma.funcionario.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
    },
  });
};

export const cadastrarFuncionario = async (funcionario: Funcionario) => {
  let { password } = funcionario;
  funcionario.password = bcrypt.hashSync(password, 10);

  return await prisma.funcionario.create({
    data: funcionario,
  });
};

export const alterarFuncionario = async (id: number, data) => {
  console.log(data);

  if (data.password) {
    let { password } = data;
    data.password = bcrypt.hashSync(password, 10);
  }

  return await prisma.funcionario.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      nome: true,
      email: true,
    },
  });
};

export const getFuncionario = async (id: number) => {
  return await prisma.funcionario.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      nome: true,
      email: true,
    },
  });
};

export const removerFuncionario = async (id: number) => {
  await prisma.funcionario.delete({ where: { id } });
};
