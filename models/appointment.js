// models/appointment.js

const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    roomType: { type: String, required: true, trim: true },
    roomSize: { type: String, required: true, trim: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    message: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
