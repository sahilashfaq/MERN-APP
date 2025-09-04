const express = require("express");
const { getAllRooms } = require("../controller/rooms.controller");

const router = express.Router();

router.get("/getAll", getAllRooms);

module.exports = router;
