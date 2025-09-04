const express = require("express");
const router = express.Router();
const { addAppointment } = require("../controller/appointment.controller");

router.post("/add", addAppointment);

module.exports = router;
