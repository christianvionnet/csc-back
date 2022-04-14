const mongoose = require("mongoose");
const password = require("./password.js");
const Note = require("./models/Note.js");
// const { model, Schema } = mongoose;

const connectionString = process.env.MONGO_DB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });
