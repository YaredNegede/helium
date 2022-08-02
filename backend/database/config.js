const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://"+process.env.MONGODB_USER+":"+process.env.MONGODB_PASSWORD+"@"+process.env.MONGODB_HOST);
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    console.log(error)
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;
