const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, { dbname: process.env.DB_NAME })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from database");
});
