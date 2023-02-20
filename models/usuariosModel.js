const { model, Schema } = require("mongoose");

const userShema = new Schema(
  {
    nombre: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
//nombre de la coleccion en singular y el esquema
module.exports = model("usuario", userShema);
