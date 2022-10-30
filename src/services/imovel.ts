import { api } from "./api";
import { Imovel } from "../models";
import { alterarAnuncio } from "src/backend/anuncio/ctrAnuncio";

export const cadastrarImovel = async (imovel: Imovel) => {
  try {
    return await api.post("/imoveis", imovel);
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export const listarImoveis = async () => {
  try {
    const response = await api.get("/imoveis");
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
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

export const alterarImovel = async (id, imovel) => {
  try {
    const response = await api.put(`/imoveis/${id}`, imovel);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};
