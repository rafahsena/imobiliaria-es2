import { NextApiResponse, NextApiRequest } from "next";
import { emitirContrato, listarContratos } from "src/backend/contrato/ctrContrato";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const contratos = await listarContratos();
      res.status(200).json(contratos);
    } catch (e) {
      res.status(500).json({ error: "Server Error" });
    }
  }

  if (req.method === "POST") {
    try {
      await emitirContrato(req.body);
      res.status(201);
    } catch (e) {
      res.status(401).json({ error: "Send the right fields to create a contract" });
    }
  }
};