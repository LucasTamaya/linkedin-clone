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
  const email = req.body.email;
  const password = req.body.password;
  
  const user = await User.findOne({email: email});
  if(!user) {
    console.log("email doesn't exists")
    // si l'email n'existe pas
    return res.send({msg: "email not found"})
  }

  if(password === user.password){
    console.log("Loged in")
    // si l'email existe et que le mot de passe correspond
    res.send({msg: "log"})
  } else {
    console.log("Went wrong on login")
    // si l'email existe mais que le mot de passe ne correspond pas
    res.send({msg: "email or pwd invalid"})
  }
}
