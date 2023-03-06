const { check } = require("express-validator");

exports.createServiceValidator = [
  check("serie")
    .notEmpty()
    .withMessage("El campo serie es requerido")
    .isString()
    .withMessage("El campo serie es de tipo String"),
  check("marca")
    .notEmpty()
    .withMessage("El campo marca es requerido")
    .isString()
    .withMessage("El campo marca es de tipo String"),
  check("modelo")
    .notEmpty()
    .withMessage("El campo modelo es requerido")
    .isString()
    .withMessage("El campo modelo es de tipo String"),
  check("submodelo")
    .notEmpty()
    .withMessage("El campo submodelo es requerido")
    .isString()
    .withMessage("El campo submodelo es de tipo String"),
  check("identificador")
    .notEmpty()
    .withMessage("El campo identificador es requerido")
    .isNumeric()
    .withMessage("El campo identificador es de tipo Numerico"),
  check("nombre")
    .notEmpty()
    .withMessage("El campo nombre es requerido")
    .isString()
    .withMessage("El campo nombre es de tipo String"),
  check("ficha")
    .notEmpty()
    .withMessage("El campo ficha es requerido")
    .isNumeric()
    .withMessage("El campo ficha es de tipo Numerico"),
  check("nivel")
    .notEmpty()
    .withMessage("El campo nivel es requerido")
    .isNumeric()
    .withMessage("El campo nivel es de tipo Numerico"),

  check("subdireccion")
    .notEmpty()
    .withMessage("El campo subdireccion es requerido")
    .isString()
    .withMessage("El campo subdireccion es de tipo String"),
  check("gerencia")
    .notEmpty()
    .withMessage("El campo gerencia es requerido")
    .isString()
    .withMessage("El campo gerencia es de tipo String"),

  check("depto")
    .notEmpty()
    .withMessage("El campo depto es requerido")
    .isString()
    .withMessage("El campo depto es de tipo String"),
  check("clvdepto")
    .notEmpty()
    .withMessage("El campo clvdepto es requerido")
    .isNumeric()
    .withMessage("El campo clvdepto es de tipo Numerico"),
  check("centrotrab")
    .notEmpty()
    .withMessage("El campo centrotrab es requerido")
    .isString()
    .withMessage("El campo centrotrab es de tipo String"),
  check("clvct")
    .notEmpty()
    .withMessage("El campo clvct es requerido")
    .isNumeric()
    .withMessage("El campo clvct es de tipo Numerico"),
  check("ctadmon")
    .notEmpty()
    .withMessage("El campo ctadmon es requerido")
    .isString()
    .withMessage("El campo ctadmon es de tipo String"),
  check("clvctadmon")
    .notEmpty()
    .withMessage("El campo clvctadmon es requerido")
    .isNumeric()
    .withMessage("El campo clvctadmon es de tipo Numerico"),
];
