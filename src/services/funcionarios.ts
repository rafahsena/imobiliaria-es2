import { api } from "./api";

export const listarFuncionarios = async () => {
  try {
    const response = await api.get("/funcionarios");
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getFuncionario = async (funcionarioId) => {
  try {
    const response = await api.get(`/funcionarios/${funcionarioId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export const alterarFuncionario = async (id, funcionario) => {
  try {
    const response = await api.put(`/funcionarios/${id}`, funcionario);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Não foi possível atualizar o cadastro do funcionário");
  }
};

export const removerFuncionario = async (id) => {
  try {
    return await api.delete(`/funcionarios/${id}`);
  } catch (e) {
    throw new Error("Não foi possível remover o funcionário");
  }
};
