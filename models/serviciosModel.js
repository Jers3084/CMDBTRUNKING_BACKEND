const { model, Schema } = require("mongoose");

const ServiciosSchema = new Schema(
  {
    serie: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    submodelo: { type: String, required: true },
    tecnologia: { type: String, required: true },
    tiporadio: { type: String, required: true },
    identificador: { type: Number, required: true, unique: true },
    cobertura: { type: String, required: true },
    callgroup: { type: Boolean, required: true },
    callpriv: { type: Boolean, required: true },
    acctel: { type: Boolean, required: true },
    callemerg: { type: Boolean, required: true },
    zonausuario: { type: String, required: true },
    nombre: { type: String, required: true },
    ficha: { type: Number, required: true },
    nivel: { type: Number, required: true },
    regimen: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    organismo: { type: String, required: true },
    subdireccion: { type: String, required: true },
    clvsubdireccion: { type: Number },
    gerencia: { type: String, required: true },
    clvgerencia: { type: Number },
    suptcia: { type: String },
    clvsuptcia: { type: Number },
    depto: { type: String, required: true },
    clvdepto: { type: Number, required: true },
    centrotrab: { type: String, required: true },
    clvct: { type: Number, required: true },
    zonadmon: { type: String, required: true },
    ctadmon: { type: String, required: true },
    clvctadmon: { type: Number, required: true },
    observaciones: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
//nombre de la coleccion en singular y el esquema
module.exports = model("servicio", ServiciosSchema);
