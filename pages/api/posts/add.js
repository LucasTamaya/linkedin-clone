import NextCors from "nextjs-cors";
const mongoose = require("mongoose");
const Post = require("./models/post");

// URI afin de se connecter à mongoDB
const dbURI = process.env.DB_URI;

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
  const { message, name, email } = req.body;

  // remplit le post
  const newPost = await new Post({
    message: message,
    name: name,
    email: email,
  });

  // sauvegarde ce nouveau post dans mongoDB
  await newPost
    .save()
    .then((result) => {
      console.log("Post saved in DB");
      res.send({ status: 200 });
    })
    .catch((err) => console.log(err));

  // sauvegarde ce nouvel utilisateur dans la base de donnée
}
