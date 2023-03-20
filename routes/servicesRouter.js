const { Router } = require("express");
const {
  obtener,
  obtenerdetalleid,
  obtenerdetallezona,
  obtenerdetalleficha,
  obtenerdetalleserie,
  guardar,
  actualizar,
  borrar,
} = require("../controller/serviceController");
const { body } = require("express-validator");
const { validateToken } = require("../middleware/validateTokenMiddleware");

const validator = require("../validators/serviceValidator");
const router = Router();

router.get("/", obtener);
router.get("/id/:valor1", obtenerdetalleid);
router.get("/zona/:valor2", obtenerdetallezona);
router.get("/ficha/:valor3", obtenerdetalleficha);
router.get("/serie/:valor4", obtenerdetalleserie);
router.post("/", validator.createServiceValidator, guardar);
router.post(
  "/actualizar",
  validateToken,
  validator.createServiceValidator,
  actualizar
);
router.post("/borrar", validateToken, borrar);

module.exports = router;
