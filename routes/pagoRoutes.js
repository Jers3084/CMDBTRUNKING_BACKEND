const { Router } = require("express");
const router = Router();
const { pago } = require("../controller/pagosController");

router.post("/", pago);

module.exports = router;
