const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  send: {
    type: Boolean,
    required: true,
  },
  d_server: {
    type: String,
    required: true,
  },
  d_channel: {
    type: String,
    required: true,
  },
  d_user: {
    type: String,
    default: false,
  },
  data: {
    email: String,
    whyApex: String,
    gameName: String,
    ign: String,
    kd: String,
    contact: String,
    social: String,
  },
});

const model = mongoose.model("apexsite", schema);
module.exports = model;
