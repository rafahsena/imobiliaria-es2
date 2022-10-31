import { NextApiResponse, NextApiRequest } from "next";
import {
    listarFuncionarios,
    cadastrarFuncionario,
} from "src/backend/funcionario/ctrFuncionario";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const funcionario = await listarFuncionarios();
      if (!funcionario) throw new Error("error");

      res.status(200).json(funcionario);
    } catch (e) {
      res.status(404).json({ error: "Could't find any employee" });
    }
  }

  if (req.method === "POST") {
    try {
        const funcionario = await cadastrarFuncionario(req.body);

        res.status(200).json({
            id: funcionario.id,
            nome: funcionario.nome,
            email: funcionario.email
        });
    } catch (e) {

        res.status(400).json({ error: "Couldn't create the employee", e });
    }
  }
};
