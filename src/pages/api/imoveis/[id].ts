import { NextApiResponse, NextApiRequest } from "next";
import { getImovel } from "src/backend/imoveis/ctrImovel";

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
};
