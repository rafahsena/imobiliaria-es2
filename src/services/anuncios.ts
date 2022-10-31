import { api } from "./api";

export const listarAnuncios = async () => {
  try {
    const response = await api.get("/anuncios");
    return response.data
  } catch (e) {
    console.log(e);
    return [];
  }
};
