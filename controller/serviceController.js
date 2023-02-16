const {
  obtenerServicios,
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
    const { serie } = req.body;
    response.data = await borrarServicio(serie);
    response.message = "Ok";
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar, actualizar, borrar };
