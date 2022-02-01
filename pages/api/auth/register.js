const mongoose = require("mongoose");
const User = require("./models/user");

// URI afin de se connecter à mongoDB
const dbURI =
  "mongodb+srv://lucas_tamaya:Lucas2003@linkedincloneapp.4qysj.mongodb.net/LinkedinCloneDB?retryWrites=true&w=majority";

// connection à notre base de donnée mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

export default function handler(req, res) {
  // récupère la data envoyée depuis le frontend, remplit le model avec la data souhaitée 
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  // sauvegarde ce nouvel utilisateur dans la base de donnée
  newUser.save((err) => {
    if (err) console.log(err);
    console.log("data inserted in DB");
  });

  res.redirect(200, "/dashboard");
}
