const mongoose = require("mongoose");
const User = require("./models/user");

// URI afin de se connecter à mongoDB
const dbURI = process.env.DB_URI;

// connection à notre base de donnée mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

export default async function handler(req, res) {
  // récupère la data envoyée depuis le frontend, remplit le model avec la data souhaitée
  const newUser = await new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  // sauvegarde ce nouvel utilisateur dans mongoDB et renvoit un status au front afin de savoir si la sauvegarde a réussit ou échouer
  await newUser
    .save()
    .then((result) => res.send({status: 200}))
    .catch((err) => console.log(err));

  // sauvegarde ce nouvel utilisateur dans la base de donnée
}
