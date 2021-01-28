const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Flights } = require("./flights.models");
const { Cars } = require("./cars.models");

const tripsSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  flight: {
    type: [Flights],
    required: true,
  },
  hotel: {
    type: [Hotels],
    required: false,
  },
  car: {
    type: [Cars],
    required: false,
  },
  totalCost: {
    //in cents
    type: Number,
  },
});

const Trips = mongoose.model("Trips", tripsSchema);
module.exports = { Trips };
