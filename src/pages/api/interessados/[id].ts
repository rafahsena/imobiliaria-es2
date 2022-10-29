import { NextApiResponse, NextApiRequest } from "next";
import { demonstrarInteresse, listarInteressados } from "src/backend/interessados/ctrInteressados";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const imoveis = await listarInteressados(Number(id));
      res.status(200).json(imoveis);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  if (req.method === "POST") {
    try {
      const imoveis = await demonstrarInteresse(req.body, Number(id));
      res.status(200).json(imoveis);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }

  if (req.method === "DELETE") {
    try {
      const imoveis = await listarInteressados(Number(id));
      res.status(200).json(imoveis);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
};
