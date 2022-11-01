import { api } from "./api";

export const listarAnuncios = async () => {
  try {
    const response = await api.get("/anuncios");
    return response.data;
  } catch (e) {
    return [];
  }
};

export const cadastrarAnuncio = async (anuncio) => {
  try {
    const response = await api.post("/anuncios", anuncio);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};

export const verAnuncio = async (id) => {
  try {
    const response = await api.get(`/anuncios/${id}`);
    return response.data;
  } catch (e) {
    throw new Error();
  }
};
