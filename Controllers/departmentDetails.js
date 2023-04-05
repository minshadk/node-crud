const DepartmentDetails = require("../Models/departmentDetails");

exports.newDepartmentDetails = async (req, res, next) => {
  try {
    const departmentDetails = new DepartmentDetails(req.body);
    const addDepartmentDetails = await departmentDetails.save();
    return res.status(200).json({
      status: "success",
      message: "new department details created",
      data: departmentDetails,
    });
  } catch (err) {
    next(err);
    return res.status(400).json({
      status: "failed",
    });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await DepartmentDetails.find({
      departmentId: req.params.departmentId,
    });
    return res.status(200).json({
      status: "success",
      data: department,
    });
  } catch {
    return res.status(400).json({ status: "failed" });
  }
};
