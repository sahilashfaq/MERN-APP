const Rooms = require("../models/rooms");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find();
    res.status(200).json({
      message: "All Rooms fetched successfully",
      data: rooms,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching rooms",
      error: error.message,
    });
  }
};

module.exports = {
  getAllRooms,
};
