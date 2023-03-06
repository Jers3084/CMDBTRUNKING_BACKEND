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
    callgroup: { type: String, required: true },
    callpriv: { type: String, required: true },
    acctel: { type: String, required: true },
    callemerg: { type: String, required: true },
    zonausuario: { type: String, required: true },
    nombre: { type: String, required: true },
    ficha: { type: Number, required: true },
    nivel: { type: Number, required: true },
    regimen: { type: String, required: true },
    telefono: { type: String },
    email: { type: String },
    organismo: { type: String, required: true },
    subdireccion: { type: String, required: true },
    clvsubdireccion: { type: Number },
    gerencia: { type: String },
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
