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
  // on récupères tous les posts présent dans mongoDB
  const post = await Post.find()
    .then((result) => {
      // et on les envoit à notre frontend afin d'afficher le rendu des posts avec leurs messages
      res.status(200).send(result);
    })
    .catch((err) => console.log(err));
}
