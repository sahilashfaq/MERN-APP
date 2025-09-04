const mongoose = require("mongoose");
const Staff = require("./models/staff");
const Rooms = require("./models/rooms");

// staff dummy data
const staffData = [
  {
    name: "Michael Dean",
    role: "Chef Master",
    imageUrl:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Arnold Taylor",
    role: "Room Cleaner",
    imageUrl:
      "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Jane Cooper",
    role: "Assistant Chef",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "John Smith",
    role: "Supervisor",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
  },
];

// rooms dummy data
const roomsData = [
  {
    name: "Deluxe Rooms",
    price: 800,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    guests: 2,
    beds: 2,
    baths: 1,
  },
  {
    name: "Junior Rooms",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    guests: 2,
    beds: 2,
    baths: 1,
  },
  {
    name: "Family Rooms",
    price: 600,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    guests: 2,
    beds: 2,
    baths: 1,
  },
];

// Seed staff
const seedStaff = async () => {
  try {
    const count = await Staff.countDocuments();
    if (count === 0) {
      await Staff.insertMany(staffData);
      console.log("Staff data seeded");
    } else {
      console.log("Staff data already exists, skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding staff:", error.message);
  }
};

// Seed rooms
const seedRooms = async () => {
  try {
    const count = await Rooms.countDocuments();
    if (count === 0) {
      await Rooms.insertMany(roomsData);
      console.log("Rooms data seeded");
    } else {
      console.log("Rooms data already exists, skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding rooms:", error.message);
  }
};

// Connect DB + run seeding
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
    await seedStaff();
    await seedRooms();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
