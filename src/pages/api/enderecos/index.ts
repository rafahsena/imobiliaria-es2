import { NextApiResponse, NextApiRequest } from "next";

import { criarEndereco } from "../../../backend/enderecos/ctrEndereco";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const imovel = await criarEndereco(req.body);
      res.status(200).json(imovel);
    } catch (e) {
      res.status(400).json({ error: "Couldn't create the property entity" });
    }
  }
};
