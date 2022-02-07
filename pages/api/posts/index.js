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
  // on récupères tous les posts présent dans mongoDB
  const posts = await db.collection("posts").find({}).toArray();
  console.log(posts);

  console.log("recuperation de tous les posts réussi");
  return res.status(200).json(posts.reverse());
}
  