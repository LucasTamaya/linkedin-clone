const Post = require("../../../models/post");
import NextCors from "nextjs-cors";
import { connectToDatabase } from "../../../util/mongodb"; //connexion à mongoDB optimisé

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();

  // middle type CORS
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  // récupère la data envoyée depuis le frontend
  const { message, name, email } = req.body;

  try {
    const newPost = await db.collection("posts").insertOne({
      message: message,
      name: name,
      email: email,
      ts: new Date(),
    });
    res.status(200).send({ error: false });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: true });
  }
}
