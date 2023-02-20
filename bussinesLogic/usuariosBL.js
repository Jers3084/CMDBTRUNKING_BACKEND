const {
  listarUsuarios,
  guardarUsuarioRepository,
  buscarPorUsuario,
  actualizarUsuarioRep,
  actualizarPasswordRep,
  eliminarUsuario,
} = require("../repositorys/usuarioRepository");
const { encryptPassword } = require("../helpers/passwordUtils");

const listarUsuariosActuales = async () => {
  return await listarUsuarios();
};

const agregarUsuarioNuevo = async (objUsuario) => {
  objUsuario.password = encryptPassword(objUsuario.password);
  return await guardarUsuarioRepository(objUsuario);
};

const buscarUsuarioDB = async (username) => {
  return await buscarPorUsuario(username);
};

const actualizarUsuarioBL = async (id, nombre, email, rol) => {
  return await actualizarUsuarioRep(id, nombre, email, rol);
};

const actualizarPasswordBL = async (id, password) => {
  password = encryptPassword(password);
  return await actualizarPasswordRep(id, password);
};

const borrarUsuarioBL = async (id) => {
  return await eliminarUsuario(id);
};

module.exports = {
  listarUsuariosActuales,
  agregarUsuarioNuevo,
  buscarUsuarioDB,
  actualizarPasswordBL,
  actualizarUsuarioBL,
  borrarUsuarioBL,
};
