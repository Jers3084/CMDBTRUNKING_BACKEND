const Usuario = require("../models/usuariosModel");

//lista todos los registros de la base de datos de usuarios
const listarUsuarios = async () => {
  return await Usuario.find().select({
    nombre: true,
    email: true,
    username: true,
  });
};

//Buscar usuario por username
const buscarPorUsuario = async (username) => {
  return await Usuario.findOne({ username });
};

//Guardar documento con datos de usuario nuevo
const guardarUsuarioRepository = async (model) => {
  const usuario = new Usuario(model);
  const resultado = await usuario.save();
  return resultado;
};

const actualizarUsuarioRep = async (id, nombre, email) => {
  return await Usuario.findByIdAndUpdate(
    { _id: id },
    { nombre: nombre, email: email },
    { new: true }
  );
};

const actualizarPasswordRep = async (id, password) => {
  return await Usuario.findByIdAndUpdate(
    { _id: id },
    { password: password },
    { new: true }
  );
};

const eliminarUsuario = async (id) => {
  return await ServiceModel.deleteOne({ _id: id });
};

module.exports = {
  listarUsuarios,
  buscarPorUsuario,
  guardarUsuarioRepository,
  actualizarUsuarioRep,
  actualizarPasswordRep,
  eliminarUsuario,
};
