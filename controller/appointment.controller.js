const Appointment = require("../models/appointment");

const addAppointment = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      roomType,
      roomSize,
      checkIn,
      checkOut,
      message,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !roomType ||
      !roomSize ||
      !checkIn ||
      !checkOut
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    const newAppointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      roomType,
      roomSize,
      checkIn,
      checkOut,
      message,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

module.exports = {
  addAppointment,
};
