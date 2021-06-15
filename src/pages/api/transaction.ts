import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { db } = await connectToDatabase();

  switch (method) {
    case "POST":
      try {
        const data = req.body;
        const collection = db.collection("transactions");

        await collection.insertOne(data);

        res.status(200).json(data);
      } catch (err) {
        res.status(400).send(err);
      }
  }
}
