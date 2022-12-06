const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  driver: {
    type: String,
    required: true,
  },
  weightbefore: {
    type: Number,
    required: true,
  },
  weightafter: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("drivers", DriverSchema);
module.exports = UserModel;

