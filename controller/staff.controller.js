const Staff = require("../models/staff");

const getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.status(200).json({
      message: "All Staffs fetched successfully",
      data: staffs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  getAllStaffs,
};
