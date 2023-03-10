const { Router } = require("express");
const {
  listarUsuarios,
  guardarNuevoUsuario,
  actualizarUsuarioC,
  borrarUsuarioC,
  actualizaPassword,
  login,
} = require("../controller/usuariosController");
const { validateToken } = require("../middleware/validateTokenMiddleware");
const router = Router();

router.get("/", validateToken, listarUsuarios);
router.post("/", guardarNuevoUsuario);
router.post("/actualizar", validateToken, actualizarUsuarioC);
router.post("/borrar", validateToken, borrarUsuarioC);
router.post("/actpassword", validateToken, actualizaPassword);
router.post("/login", login);

module.exports = router;
