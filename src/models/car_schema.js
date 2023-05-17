const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  profile_pic: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  modal_name: {
    type: String,
    required: true,
  },
  price_of_renting_per_day: {
    type: String,
    required: true,
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["available", "not-available"],
  },
});

const CarModel = mongoose.model("Car", CarSchema);

module.exports = CarModel;
