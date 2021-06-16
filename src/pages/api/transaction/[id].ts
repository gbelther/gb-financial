import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../util/mongodb";

import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.query;

  const { db } = await connectToDatabase();
  const collection = db.collection("transactions");

  switch (method) {
    case "PUT":
      const data = req.body;

      try {
        const response = await collection.updateOne(
          { _id: ObjectId(String(id)) },
          { $set: data }
        );

        res.status(200).json({ _id: ObjectId(String(id)), ...data });
      } catch (err) {
        res.status(400).json({ ok: false });
      }

      break;
    case "DELETE":
      try {
        const transactionDeleted = await collection.deleteOne({
          _id: ObjectId(String(id)),
        });

        res.status(200).json({ status: "deleted", _id: ObjectId(String(id)) });
      } catch (err) {
        res.status(400).send("Erro ao excluir a transação");
      }

      break;
  }
}
