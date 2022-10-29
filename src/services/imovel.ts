import { api } from "./api";
import { Imovel } from "../models";

export const cadastrarImovel = async (imovel: Imovel) => {
  try {
    return await api.post("/imoveis", imovel);
  } catch (e) {
    console.log(e);
  }
};

export const listarImoveis = async (funcionarioId) => {
  try {
    const response = await api.get("/imoveis", { params: { funcionarioId } });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getImovel = async (imovelId) => {
  try {
    const response = await api.get(`/imoveis/${imovelId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const removerImovel = async (imovelId) => {
  try {
    const response = await api.delete(`/imoveis/${imovelId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Couldn't delete property");
  }
};
