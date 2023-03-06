const { Router } = require("express");
const { obtener, guardar } = require("../controller/productController");
const { body } = require("express-validator");

const validator = require("../validators/productValidator");
const router = Router();

router.get("/", obtener);
router.post("/", validator.createProductValidator, guardar);

module.exports = router;
