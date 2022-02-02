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
    return res.send({status: 500})
  }

  if(password === user.password){
    console.log("Loged in")
    res.send({status: 200})
  } else {
    console.log("Went wrong on login")
    res.send({status: 500})
  }
}
