const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");
import NextCors from "nextjs-cors";

// URI afin de se connecter à mongoDB
const dbURI =
  "mongodb+srv://lucas_tamaya:Lucas2003@linkedincloneapp.4qysj.mongodb.net/LinkedinCloneDB?retryWrites=true&w=majority";

// connection à notre base de donnée mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // récupère la data envoyée depuis le frontend
  const { email, password } = req.body;
  // va stocker le nom d'utilisateur afin de l'afficher sur son dashboard via le localStorage
  let name;

  const user = await User.findOne({ email: email });
  if (!user) {
    // si l'utilisateur n'existe pas
    return res.send({ msg: "email not found" });
  } else {
    // si l'utilisateur existe, on récupère son nom
    name = user.name;
  }

  // hash le password et le compare avec celui enregistré dans la base de donnée
  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // si l'utilisateur existe et que le mot de passe correspond
    res.send({ msg: "log", email: email, name: name }); //on renvoit en plus le mail et le nom de l'utilisateur
  } else {
    // si l'utilisateur existe mais que le mot de passe ne correspond pas
    res.send({ msg: "email or pwd invalid" });
  }
}
