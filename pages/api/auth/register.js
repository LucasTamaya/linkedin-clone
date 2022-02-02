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
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  try {
    await newUser.save((err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("data inserted in DB");
        res.redirect(307, "/dashboard");
      }
    });
  } catch (err) {
    res.status(500).send({ error: "failed to insert data" });
  }

  // sauvegarde ce nouvel utilisateur dans la base de donnée
}
