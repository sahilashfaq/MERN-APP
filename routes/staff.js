const express = require("express");
const { getAllStaffs } = require("../controller/staff.controller");
const router = express.Router();

router.get("/getAll", getAllStaffs);

module.exports = router;
