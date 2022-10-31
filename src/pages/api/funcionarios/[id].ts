import { NextApiResponse, NextApiRequest } from "next";
import {
  getFuncionario,
  alterarFuncionario,
  removerFuncionario,
} from "src/backend/funcionario/ctrFuncionario";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const funcionario = await getFuncionario(Number(id));
      if (!funcionario) throw new Error("error");

      res.status(200).json(funcionario);
    } catch (e) {
      console.log(e);

      res.status(404).json({ error: "Could't find the employee" });
    }
  }

  if (req.method === "PUT") {
    try {
      const funcionario = await alterarFuncionario(Number(id), req.body);
      res.status(200).json(funcionario);
    } catch (e) {
      res.status(400).json({ error: "Couldn't edit the employee" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const funcionario = await removerFuncionario(Number(id));
      res.status(200).json({});
    } catch (e) {
      res.status(400).json({ error: "Couldn't delete the employee" });
    }
  }
};
