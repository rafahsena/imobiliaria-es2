import { api } from "./api";
import { Imovel } from "../models";

export const cadastrarImovel = async (imovel: Imovel) => {
  try {
    return await api.post("/imoveis", imovel);
  } catch (e) {
    console.log(e);
  }
};
