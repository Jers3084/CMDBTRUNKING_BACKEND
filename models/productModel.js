const { model, Schema } = require("mongoose");

const ProductoShema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String, default:  "https://avalos.sv/wp-content/uploads/default-featured-image.png"},
  precio: { type: Number, required: true },
  stock: { type: Number, required: true},
  codigo: {type: String, required: true},
},
{
versionKey: false,
timestamps: true,
}
);
//nombre de la coleccion en singular y el esquema
module.exports = model("product", ProductoShema);
