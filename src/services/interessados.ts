import { Interessado } from "src/models";
import { api } from "./api";

export const listarInteressados = async (anuncioId: number): Promise<Interessado[]> => {
  try {
    const response = await api.get(`/interessados/${anuncioId}`);
    return response.data;
  } catch (e) {
    throw new Error("Anuncio not found");
  }
};

export const demonstrarInteresse = async (anuncioId: number, data: Interessado) => {
  try {
    const response = await api.post(`/interessados/${anuncioId}`, data);
    return response.status;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deletarInteressado = async (anuncioId: number) => {
  try {
    const response = await api.delete(`/interessados/${anuncioId}`);
    return response.status;
  } catch (e) {
    throw new Error("Anuncio not found");
  }
};
