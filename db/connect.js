const mongoose = require("mongoose");
const connectDB = async (uri) => {
    console.log("Connecting to DB");
    await mongoose.connect(uri);
    console.log("Connected to DB");
};
module.exports = connectDB;
