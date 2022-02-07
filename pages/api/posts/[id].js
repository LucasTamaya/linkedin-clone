import NextCors from "nextjs-cors";
import { connectToDatabase } from "../../../util/mongodb"; //connexion à mongoDB optimisé
const mongodb = require("mongodb");

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();
  console.log("requête delete enclencher");

  // middle type CORS
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  const id = req.query.id;
  console.log(typeof id);
  try {
    const deletePost = await db
      .collection("posts")
      .deleteOne({ _id: new mongodb.ObjectId(id) });
    res.status(200).send({ error: false });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: true });
  }
  // return res.status(200).send({error: false})
}
