const bcrypt = require("bcrypt"); //hashing mot de passe
import NextCors from "nextjs-cors"; //cors error
import { connectToDatabase } from "../../../util/mongodb"; //connexion à mongoDB optimisé

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();

  // CORS
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200,
  // });

  // récupère la data envoyée depuis le frontend
  const { email, password } = req.body;

  // va stocker le nom d'utilisateur
  let name;
  let userPassword;

  // cherche si l'utilisateur existe
  const existingUser = await db
    .collection("users")
    .find({ email: email })
    .toArray();

  console.log(existingUser);
  // si utilisateur existant, on compare les mots de passe
  if (existingUser.length >= 1) {
    console.log(existingUser);
    existingUser.map(async (user) => {
      console.log("utilisateur trouvé");
      name = user.name;
      userPassword = user.password;
    });
    // si utilisateur non existant, on renvoit un message d'erreur
  } else {
    console.log("utilisateur non existant");
    return res.status(200).send({ error: "email" });
  }

  const isMatch = await bcrypt.compare(password, userPassword);
  // si les mots de passe correspondent, on renvoit un message success
  if (isMatch) {
    console.log("mot de passe correct");
    return res.status(200).send({ success: true, email: email, name: name });
    // sinon, on renvoit un message d'erreur
  } else {
    console.log("mot de passe incorrect");
    return res.status(500).send({ error: "password" });
  }
}
