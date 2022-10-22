import { NextApiResponse, NextApiRequest } from "next";

import { getEndereco } from "../../../backend/enderecos/ctrEndereco";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const endereco = await getEndereco(Number(id));
      if (!endereco) throw new Error('error')

      res.status(200).json(endereco);
    } catch (e) {
      res.status(400).json({ error: "Could't find the address" });
    }
  }
};
