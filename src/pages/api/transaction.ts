import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      // método get
      res.status(200).json({ msg: method });
      break;
    case "POST":
      // método post
      res.status(200).json({ msg: method });
  }
}
