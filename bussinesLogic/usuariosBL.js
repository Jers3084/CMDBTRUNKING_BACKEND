const {
  listarUsuarios,
  guardarUsuarioRepository,
  buscarPorUsuario,
  actualizarUsuarioRep,
  actualizarPasswordRep,
} = require('../repositorys/usuarioRepository')
const { encryptPassword } = require('../helpers/passwordUtils')

const listarUsuariosActuales = async () => {
  return await listarUsuarios()
}

const agregarUsuarioNuevo = async (objUsuario) => {
  objUsuario.password = encryptPassword(objUsuario.password)
  return await guardarUsuarioRepository(objUsuario)
}

const buscarUsuarioDB = async (username) => {
  return await buscarPorUsuario(username)
}

const actualizarUsuarioBL = async (id, nombre, email) => {
  return await actualizarUsuarioRep(id, nombre, email)
}

const actualizarPasswordBL = async (id, password) => {
  password = encryptPassword(password)
  return await actualizarPasswordRep(id, password)
}

module.exports = {
  listarUsuariosActuales,
  agregarUsuarioNuevo,
  buscarUsuarioDB,
  actualizarPasswordBL,
  actualizarUsuarioBL,
}
