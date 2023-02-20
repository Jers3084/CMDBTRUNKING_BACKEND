const {
  listarUsuariosActuales,
  agregarUsuarioNuevo,
  actualizarUsuarioBL,
  actualizarPasswordBL,
  buscarUsuarioDB,
  borrarUsuarioBL,
} = require("../bussinesLogic/usuariosBL");

const { comparePassword } = require("../helpers/passwordUtils");
const { generateToken } = require("../helpers/jwtUtils");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");

const listarUsuarios = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await listarUsuariosActuales();
    response.message = CustomMessages.listado_ok;
    response.success = true;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const guardarNuevoUsuario = async (req, res) => {
  const response = new GenericResponse();
  try {
    const { nombre, username, email, rol, password } = req.body;
    const dtoUsuario = { nombre, username, email, rol, password };
    response.data = await agregarUsuarioNuevo(dtoUsuario);
    response.message = CustomMessages.create_ok;
    response.success = true;
    return res.status(201).json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const actualizarUsuarioC = async (req, res) => {
  const response = new GenericResponse();
  try {
    const { id, nombre, email, rol } = req.body;
    const resultado = await actualizarUsuarioBL(id, nombre, email, rol);
    response.message = CustomMessages.update_ok;
    response.data = resultado;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const borrarUsuarioC = async (req, res) => {
  const response = new GenericResponse();
  try {
    const id = req.body;
    const resultado = await borrarUsuarioBL(id);
    response.message = CustomMessages.delete_ok;
    response.data = resultado;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const actualizaPassword = async (req, res) => {
  const response = new GenericResponse();
  try {
    const { id, password } = req.body;
    const resultado = await actualizarPasswordBL(id, password);
    response.message = CustomMessages.update_pass_ok;
    response.data = resultado;
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.message = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const login = async (req, res) => {
  const response = new GenericResponse();
  try {
    const { username, password } = req.body;

    const findUser = await buscarUsuarioDB(username);
    if (!findUser) {
      (response.message = "Usuario no encontrado"), (response.success = false);
      response.data = [];

      return res.status(404).json(response);
    }

    const compare = comparePassword(password, findUser.password);

    if (!compare) {
      response.message = "Password invalido";
      response.success = false;
      response.data = [];
      return res.status(400).json(response);
    }

    const token = await generateToken(findUser);
    response.message = "ok..";
    response.success = true;
    response.data = { user: findUser, token };
    return res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(response);
  }
};

module.exports = {
  listarUsuarios,
  guardarNuevoUsuario,
  actualizarUsuarioC,
  borrarUsuarioC,
  actualizaPassword,
  login,
};
