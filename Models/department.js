const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Department", departmentSchema);
