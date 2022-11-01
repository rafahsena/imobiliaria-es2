import { NextApiResponse, NextApiRequest } from "next";
import { register } from "src/backend/login/ctrLogin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      try {
        return await register(req, res);
      } catch (e) {
        res.status(400).json({ error: "Failed authenticating" });
      }
    }
  };
  