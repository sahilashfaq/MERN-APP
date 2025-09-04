const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();
const app = express();

const staffRouter = require("./routes/staff");
const roomsRouter = require("./routes/rooms");
const appointmentRouter = require("./routes/appointment");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use(`${process.env.VERSION1}/staff`, staffRouter);
app.use(`${process.env.VERSION1}/rooms`, roomsRouter);
app.use(`${process.env.VERSION1}/appointment`, appointmentRouter);

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
