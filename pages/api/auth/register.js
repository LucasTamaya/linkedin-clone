import NextCors from "nextjs-cors";
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");

// URI afin de se connecter à mongoDB
const dbURI = "mongodb+srv://lucas_tamaya:Lucas2003@linkedincloneapp.4qysj.mongodb.net/LinkedinCloneDB?retryWrites=true&w=majority"

// connection à notre base de donnée mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

export default async function handler(req, res) {
  // middle type CORS
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  // récupère la data envoyée depuis le frontend
  const { email, name, password } = req.body;

  // test afin de vérifier si l'email existe deja
  const existingEmail = await User.findOne({
    email: email,
  });

  if (existingEmail) {
    return res.status(400).json({ msg: "existing email" });
  }

  // hashing du mot de passe avec bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // crée le nouvel utilisateur
  const newUser = await new User({
    email: email,
    name: name,
    password: hashPassword,
  });

  // sauvegarde ce nouvel utilisateur dans mongoDB et renvoit un status au front afin de savoir si la sauvegarde a réussit ou échouer
  const saveUser = await newUser
    .save()
    .then((result) => {
      res.send({ status: 200 });
    })
    .catch((err) => console.log(err));
}
