const mongoose = require("mongoose");

const departmentDetailsSchema = mongoose.Schema({
  departmentId: mongoose.Schema.Types.ObjectId,
  departmentDetails: Array,
});

module.exports = mongoose.model("DepartmentDetails", departmentDetailsSchema);
 