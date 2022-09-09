const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;
const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, MONGO_OPTIONS); // Database connection 🥳
    console.log("Database Connected 🥳🥳🥳🥳");
  } catch (err) {
    console.log("Could not connect to MongoDB");
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

// require("dotenv").config();
// const mongoose = require("mongoose");
// function connectDB() {
//   // Database connection 🥳
//   mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const connection = mongoose.connection;
//   connection.once("open", () => {
//     console.log("Database connected 🥳🥳🥳🥳");
//   });
//   connection.on("error", () => {
//     console.log("Connection failed ☹️☹️☹️☹️");
//   });
// }

// // mIAY0a6u1ByJsWWZ

// module.exports = connectDB;
