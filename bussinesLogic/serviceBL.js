const {
  ListarServicios,
  NuevoServicio,
  actualizarServicio,
  eliminarServicio,
} = require("../repositorys/serviciosRepository");
/*const {encryptPassword} = require('../utils/password');*/

const obtenerServicios = async () => {
  return await ListarServicios();
};

const crearServicio = async (servicio) => {
  return await NuevoServicio(servicio);
};

const modificarServicio = async (servicio) => {
  return await actualizarServicio(servicio);
};

const borrarServicio = async (servicio) => {
  return await eliminarServicio(servicio);
};

module.exports = {
  obtenerServicios,
  crearServicio,
  modificarServicio,
  borrarServicio,
};
