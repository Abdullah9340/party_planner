const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  code: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
  },
  items: {
    type: Array,
  },
  createdAt: { type: Date, expires: "10080m", default: Date.now },
});

const Party = mongoose.model("Party", partySchema);

module.exports = Party;
