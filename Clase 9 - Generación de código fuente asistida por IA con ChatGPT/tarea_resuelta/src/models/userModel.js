const mongoose = require("mongoose");

require("dotenv").config();

const mongoURI = process.env.MONGO_DB;

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const UserSchema = new mongoose.Schema(
  {
    name: String,
    id: String,
    email: String,
  },
  { collection: "users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;