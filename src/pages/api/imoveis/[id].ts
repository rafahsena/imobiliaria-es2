import { NextApiResponse, NextApiRequest } from "next";
import { alterarImovel, getImovel } from "src/backend/imoveis/ctrImovel";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const imovel = await getImovel(Number(id));
      if (!imovel) throw new Error('error')
      
      res.status(200).json(imovel);
    } catch (e) {
      res.status(404).json({ error: "Could't find the property" });
    }
  }

  if (req.method === "PUT") {
    try {
      const anuncios = await alterarImovel(Number(id), req.body);
      res.status(200).json(anuncios);
    } catch (e) {
      res.status(400).json({ error: "Couldn't edit the announcement" });
    }
  }
};
