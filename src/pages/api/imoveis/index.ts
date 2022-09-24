import { NextApiResponse, NextApiRequest } from "next";

import {
  listarImoveis,
  cadastrarImovel,
} from "../../../backend/imoveis/ctrImovel";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const imoveis = await listarImoveis();
      res.status(200).json(imoveis);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
  if (req.method === "POST") {
    try {
      const imovel = await cadastrarImovel(req.body);
      res.status(200).json(imovel);
    } catch (e) {
      res.status(400).json({ error: "Couldn't create the property entity" });
    }
  }
};
