const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// création du Schema user
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // ce deuxième argument "timestamps" permet de générer automatiquement une date de création pour nos données et de l'intégrer dans la DB

// bout de code copier-coller afin de régler l'erreur: "OverwriteModelError: Cannot overwrite 'User' model once compiled"
// A REVENIR DESSUS AFIN DE BIEN LE COMPRENDRE
// userRegisterSchema.pre("save", async function () {
//   const User = this.constructor;
// });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
