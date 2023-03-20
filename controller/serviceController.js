const {
  obtenerServicios,
  obtenercondetalleid,
  obtenercondetallezona,
  obtenercondetalleficha,
  obtenercondetalleserie,
  crearServicio,
  modificarServicio,
  borrarServicio,
} = require("../bussinesLogic/serviceBL");

const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const { validationResult } = require("express-validator");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await obtenerServicios();
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const obtenerdetalleid = async (req, res) => {
  const response = new GenericResponse();
  try {
    const identificador = req.params.valor1;
    const objbuscar = { identificador };
    response.data = await obtenercondetalleid(objbuscar);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const obtenerdetallezona = async (req, res) => {
  const response = new GenericResponse();
  try {
    const zonausuario = req.params.valor2;
    const obj = { zonausuario };
    response.data = await obtenercondetallezona(obj);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const obtenerdetalleficha = async (req, res) => {
  const response = new GenericResponse();
  try {
    const ficha = req.params.valor3;
    const objficha = { ficha };
    response.data = await obtenercondetalleficha(objficha);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const obtenerdetalleserie = async (req, res) => {
  const response = new GenericResponse();
  try {
    const serie = req.params.valor4;
    const objserie = { serie };
    response.data = await obtenercondetalleserie(objserie);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.success = false;
      response.message = errors.mapped();
      return res.status(400).json(response);
    }
    response.data = await crearServicio(req.body);
    response.message = CustomMessages.create_ok;
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = CustomMessages.error_500;
    return res.status(500).json(response);
  }
};

const actualizar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.success = false;
      response.message = errors.mapped();
      return res.status(400).json(response);
    }
    response.data = await modificarServicio(req.body);
    response.message = CustomMessages.update_ok;
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = CustomMessages.error_500;
    return res.status(500).json(response);
  }
};

const borrar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const id = req.body;
    response.data = await borrarServicio(id);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

module.exports = {
  obtener,
  obtenerdetalleid,
  obtenerdetallezona,
  obtenerdetalleficha,
  obtenerdetalleserie,
  guardar,
  actualizar,
  borrar,
};
