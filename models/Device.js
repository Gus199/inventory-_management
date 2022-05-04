const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
  device_name: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  specs: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports =
  mongoose.models.Device || mongoose.model("Device", DeviceSchema);
