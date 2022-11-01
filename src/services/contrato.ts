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
