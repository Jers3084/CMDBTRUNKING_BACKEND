const ServiceModel = require("../models/serviciosModel");

const ListarServicios = async () => {
  return await ServiceModel.find();
};

const NuevoServicio = async (model) => {
  const addProduct = new ServiceModel(model);
  return await addProduct.save();
};

const actualizarServicio = async (serie) => {
  return await ServiceModel.updateOne(
    { serie: serie },
    {
      serie,
      marca,
      modelo,
      submodelo,
      tecnologia,
      tiporadio,
      identificador,
      cobertura,
      callgroup,
      callpriv,
      acctel,
      callemerg,
      zonausuario,
      nombre,
      ficha,
      nivel,
      regimen,
      telefono,
      email,
      organismo,
      subdireccion,
      clvsubdireccion,
      gerencia,
      clvgerencia,
      suptcia,
      clvsuptcia,
      depto,
      clvdepto,
      centrotrab,
      clvct,
      zonadmon,
      ctadmon,
      clvctadmon,
      observaciones,
    }
  );
};

const eliminarServicio = async (serie) => {
  return await ServiceModel.findOneAndRemove({ serie: serie });
};

module.exports = {
  ListarServicios,
  NuevoServicio,
  actualizarServicio,
  eliminarServicio,
};
