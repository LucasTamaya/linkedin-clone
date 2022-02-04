const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcrypt");

// URI afin de se connecter à mongoDB
const dbURI = process.env.DB_URI;

// connection à notre base de donnée mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

export default async function handler(req, res) {
  // récupère la data envoyée depuis le frontend
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    // si l'email n'existe pas
    return res.send({ msg: "email not found" });
  }

  // hash le password et le compare avec celui enregistré dans la base de donnée
  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    // si l'email existe et que le mot de passe correspond
    res.send({ msg: "log" });
  } else {
    // si l'email existe mais que le mot de passe ne correspond pas
    res.send({ msg: "email or pwd invalid" });
  }
}
