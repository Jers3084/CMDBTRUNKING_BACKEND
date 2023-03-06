const ServiceModel = require("../models/serviciosModel");

const ListarServicios = async () => {
  return await ServiceModel.find();
};

const NuevoServicio = async (model) => {
  const addProduct = new ServiceModel(model);
  return await addProduct.save();
};

const actualizarServicio = async (body) => {
  console.log(body);
  return await ServiceModel.updateOne(
    { _id: body._id },
    {
      serie: body.serie,
      marca: body.marca,
      modelo: body.modelo,
      submodelo: body.submodelo,
      tecnologia: body.tecnologia,
      tiporadio: body.tiporadio,
      identificador: body.identificador,
      cobertura: body.cobertura,
      callgroup: body.callgroup,
      callpriv: body.callpriv,
      acctel: body.acctel,
      callemerg: body.callemerg,
      zonausuario: body.zonausuario,
      nombre: body.nombre,
      ficha: body.ficha,
      nivel: body.nivel,
      regimen: body.regimen,
      telefono: body.telefono,
      email: body.email,
      organismo: body.organismo,
      subdireccion: body.subdireccion,
      clvsubdireccion: body.clvsubdireccion,
      gerencia: body.gerencia,
      clvgerencia: body.clvgerencia,
      suptcia: body.suptcia,
      clvsuptcia: body.clvsuptcia,
      depto: body.depto,
      clvdepto: body.clvdepto,
      centrotrab: body.centrotrab,
      clvct: body.clvct,
      zonadmon: body.zonadmon,
      ctadmon: body.ctadmon,
      clvctadmon: body.clvctadmon,
      observaciones: body.observaciones,
    },
    { new: true }
  );
};

const eliminarServicio = async (id) => {
  return await ServiceModel.findOneAndRemove({ id: id });
};

module.exports = {
  ListarServicios,
  NuevoServicio,
  actualizarServicio,
  eliminarServicio,
};
