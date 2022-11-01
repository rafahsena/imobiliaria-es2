import { NextApiResponse, NextApiRequest } from "next";
import {
  alterarContrato,
  getContrato,
  revogarContrato,
} from "src/backend/contrato/ctrContrato";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const contrato = await getContrato(Number(id));
      res.status(200).json(contrato);
    } catch (e) {
      res
        .status(404)
        .json({ error: "Couldn't find any contract with this id" });
    }
  }

  if (req.method === "PUT") {
    try {
      await alterarContrato(Number(id), req.body);
      return res.status(200).json(true);
    } catch (e) {
      console.log(e);
      res
        .status(404)
        .json({ error: "Couldn't find any contract with this id" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await revogarContrato(Number(id));
      return res.status(200).json(true);
    } catch (e) {
      res
        .status(404)
        .json({ error: "Couldn't find any contract with this id" });
    }
  }
};
