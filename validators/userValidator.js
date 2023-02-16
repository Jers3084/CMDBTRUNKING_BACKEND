const { check } = require("express-validator");

exports.userCreateValidator = [
   check("nombre")
   .notEmpty()
   .withMessage("El campo nombre es requerido")
   .isString()
   .withMessage("El campo nombre es de tipo string"),
   check("apellido")
   .notEmpty()
   .withMessage("El campo apellido es requerido")
   .isString()
   .withMessage("El campo apellido es de tipo string"),
   check("email")
   .notEmpty()
   .withMessage("El campo email es requerido")
   .isEmail()
   .withMessage("El campo email debe ser un correovalido"),
   check("password")
   .notEmpty()
   .withMessage("El campo password es requerido")
   .isString()
   .withMessage("El campo password es de tipo string"),
   check("rol")
   .notEmpty()
   .withMessage("El campo rol es requerido")
   .isArray()
   .withMessage("El campo rol es de tipo array"),
];