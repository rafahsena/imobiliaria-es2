import { NextApiResponse, NextApiRequest } from "next";
import {
  removerInteressado,
  demonstrarInteresse,
  listarInteressados,
} from "src/backend/interessados/ctrInteressados";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const interessados = await listarInteressados(Number(id));
      return res.status(200).json(interessados);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  if (req.method === "POST") {
    try {
      const interessados = await demonstrarInteresse(req.body, Number(id));
      return res.status(200).json(interessados);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  if (req.method === "DELETE") {
    try {
      const interessados = await removerInteressado(Number(id));
      return res.status(200).json(interessados);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
};
