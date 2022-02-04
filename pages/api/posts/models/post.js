const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// création du Schema post
const postSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // ce deuxième argument "timestamps" permet de générer automatiquement une date de création pour nos données et de l'intégrer dans la DB

postSchema.pre("save", async function () {
  const Post = this.constructor;
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
