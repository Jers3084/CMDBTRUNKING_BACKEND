const {check} = require('express-validator');


exports.createProductValidator = [
   check("nombre")
   .notEmpty()
   .withMessage("El campo nombre es requerido")
   .isString()
   .withMessage("El campo nombre es de tipo String"),
   check("precio")
   .notEmpty()
   .withMessage("El campo precio es requerido")
   .isNumeric()
   .withMessage("El campo precio es de tipo Numerico"),
   check("stock")
   .notEmpty()
   .withMessage("El campo stock es requerido")
   .isNumeric()
   .withMessage("El campo stock es de tipo Numerico"),
   check("codigo")
   .notEmpty()
   .withMessage("El campo codigo es requerido")
   .isString()
   .withMessage("El campo codigo es de tipo String"),
];