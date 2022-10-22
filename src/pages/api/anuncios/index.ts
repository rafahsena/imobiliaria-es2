import { NextApiResponse, NextApiRequest } from "next";
import { cadastrarAnuncio, listarAnuncios } from "src/backend/anuncio/ctrAnuncio";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const dadosAnuncio = { ...req.body, imovelId: req.body.imovelId };

      const anuncio = await cadastrarAnuncio(dadosAnuncio);
      res.status(200).json(anuncio);
    } catch (e) {
      res.status(400).json({ error: "Couldn't create the announcement entity" });
    }
  }

  if (req.method === "GET") {
    try {
      const anuncios = await listarAnuncios();
      res.status(200).json(anuncios);
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
