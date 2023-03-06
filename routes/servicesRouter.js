const { Router } = require("express");
const {
  obtener,
  guardar,
  actualizar,
  borrar,
} = require("../controller/serviceController");
const { body } = require("express-validator");
const { validateToken } = require("../middleware/validateTokenMiddleware");

const validator = require("../validators/serviceValidator");
const router = Router();

router.get("/", obtener);
router.post("/", validator.createServiceValidator, guardar);
router.post(
  "/actualizar",
  validateToken,
  validator.createServiceValidator,
  actualizar
);
router.post("/borrar", validateToken, borrar);

module.exports = router;
