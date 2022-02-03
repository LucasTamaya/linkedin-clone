const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// création du Schema post
const postSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
  { timestamps: true }
); // ce deuxième argument "timestamps" permet de générer automatiquement une date de création pour nos données et de l'intégrer dans la DB

// bout de code copier-coller afin de régler l'erreur: "OverwriteModelError: Cannot overwrite 'User' model once compiled"
// A REVENIR DESSUS AFIN DE BIEN LE COMPRENDRE
postSchema.pre("save", async function () {
  const Post = this.constructor;
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
