import { api } from "./api";
import { Endereco } from "../models";

export const cadastrarEndereco = async (endereco: Endereco) => {
  try {
    return await api.post("/enderecos", endereco);
  } catch (e) {
    console.log(e);
  }
};
