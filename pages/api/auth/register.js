import NextCors from "nextjs-cors";
const bcrypt = require("bcrypt");
import { connectToDatabase } from "../../../util/mongodb"; //connexion à mongoDB optimisé

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();

  // // middle type CORS
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });

  // récupère la data envoyée depuis le frontend
  const { email, name, password } = req.body;

  // vérifie si l'utilisateur n'est pas deja existant
  const existingUser = await db
    .collection("users")
    .find({ email: email })
    .toArray();

  if (existingUser.length >= 1) {
    console.log("utilisateur déjà existant");
    return res.status(500).send({ error: "existing user" });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await db.collection("users").insertOne({
      email: email,
      name: name,
      password: hashPassword,
    });
    console.log("nouvel utilisateur enregistré");
    console.log(newUser);
    res.status(200).send({error: false})
  }
}
