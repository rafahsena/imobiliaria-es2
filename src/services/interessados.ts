import { Interessado } from "src/models";
import { api } from "./api";

export const listarInteressados = async (anuncioId: number): Promise<Interessado[]> => {
  try {
    const response = await api.get(`/interessados/${anuncioId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Anuncio not found");
  }
};

export const demonstrarInteresse = async (anuncioId: number, data: Interessado) => {
  try {
    const response = await api.post(`/interessados/${anuncioId}`, data);
    return response.status;
  } catch (e) {
    console.log(e);
    throw new Error("Anuncio not found");
  }
};
