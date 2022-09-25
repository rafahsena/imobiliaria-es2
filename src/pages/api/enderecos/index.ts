import { NextApiResponse, NextApiRequest } from "next";

import { cadastrarEndereco } from "../../../backend/enderecos/ctrEndereco";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const imovel = await cadastrarEndereco(req.body);
      res.status(200).json(imovel);
    } catch (e) {
      res.status(400).json({ error: "Couldn't create the property entity" });
    }
  }
};
