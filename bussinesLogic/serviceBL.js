const {
  ListarServicios,
  Listarcondetalleid,
  Listarcondetallezona,
  Listarcondetalleficha,
  Listarcondetalleserie,
  NuevoServicio,
  actualizarServicio,
  eliminarServicio,
} = require("../repositorys/serviciosRepository");
/*const {encryptPassword} = require('../utils/password');*/

const obtenerServicios = async () => {
  return await ListarServicios();
};

const obtenercondetalleid = async (objeto) => {
  return await Listarcondetalleid(objeto);
};

const obtenercondetallezona = async (objeto) => {
  return await Listarcondetallezona(objeto);
};

const obtenercondetalleficha = async (objeto) => {
  return await Listarcondetalleficha(objeto);
};

const obtenercondetalleserie = async (objeto) => {
  return await Listarcondetalleserie(objeto);
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
  obtenercondetalleid,
  obtenercondetallezona,
  obtenercondetalleficha,
  obtenercondetalleserie,
  crearServicio,
  modificarServicio,
  borrarServicio,
};
