const express = require("express");
const conversionController = require("../../controllers/conversion.controller");
const router = express.Router();

router.route("/check").post(conversionController.check);

module.exports = router;
