import { NextApiResponse, NextApiRequest } from "next";
import { login } from "src/backend/login/ctrLogin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      return await login(req, res);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: "Failed authenticating" });
    }
  }
};
