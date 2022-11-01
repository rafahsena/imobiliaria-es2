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
    return [];
  }
};
