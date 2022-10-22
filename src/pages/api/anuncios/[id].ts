import { NextApiResponse, NextApiRequest } from "next";
import { alterarAnuncio, getAnuncio } from "src/backend/anuncio/ctrAnuncio";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const anuncio = await getAnuncio(Number(id));
      res.status(200).json(anuncio);
    } catch (e) {
      res.status(404).json({ error: "Could't find the announcement" });
    }
  }

  if (req.method === "PUT") {
    try {
      const anuncios = await alterarAnuncio(Number(id), req.body);
      res.status(200).json(anuncios);
    } catch (e) {
      res.status(400).json({ error: "Couldn't edit the announcement" });
    }
  }
};
