import { api } from "./api";

export const emitirContrato = async ({ contrato, cliente, endereco }) => {
  try {
    const response = await api.post("/contrato", {
      contrato,
      cliente,
      endereco,
    });
    return response.data;
  } catch (e) {
    return [];
  }
};

export const verContrato = async (id) => {
  try {
    const response = await api.get(`/contrato/${id}`);
    return response.data;
  } catch (e) {
    return {};
  }
};

export const revogarContrato = async (id) => {
  try {
    const response = await api.delete(`/contrato/${id}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const alterarContrato = async (id, contrato) => {
  try {
    const response = await api.put(`/contrato/${id}`, { contrato });

    return response;
  } catch (e) {
    console.log(e);
  }
};
