import { NextApiResponse, NextApiRequest } from "next";
import { cadastrarEndereco } from "src/backend/enderecos/ctrEndereco";

import {
  listarImoveis,
  cadastrarImovel,
} from "../../../backend/imoveis/ctrImovel";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { funcionarioId } = req.query;

      const imoveis = await listarImoveis(Number(funcionarioId));
      res.status(200).json(imoveis);
    } catch (e) {
      res.status(400).json({ error: e });
    }
  }
  if (req.method === "POST") {
    try {
      const endereco = await cadastrarEndereco(req.body.endereco);

      const dadosImovel = { ...req.body, enderecoId: endereco.id };
      delete dadosImovel.endereco;

      const imovel = await cadastrarImovel(dadosImovel);

      res.status(200).json(imovel);
    } catch (e) {
      res.status(400).json({ error: "Couldn't create the property entity" });
    }
  }
};
