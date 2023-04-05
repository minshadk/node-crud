const Department = require("../Models/department");

exports.newDepartment = async (req, res, next) => {
  const department = new Department({
    department: req.body.department,
    password: req.body.password,
  });
  try {
    const addDepartment = await department.save();
    return res.status(200).json({
      status: "success",
      message: "new department created",
      data: addDepartment,
    });
  } catch (err) {
    next(err);
    return res.status(400).json({
      status: "failed",
    });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const department = await Department.find();
    return res.status(200).json({
      status: "success",
      data: department,
    });
  } catch {
    return res.status(400).json({ status: "failed", error: err });
  }
};

exports.departmentLogin = async (req, res) => {
  try {
    const department = await Department.findOne({ department: req.body.department });

    if (!department) return res.status(400).send("Invalid user credentials");

    if (req.body.password === department.password) {
      res.status(200).json({ status: "success", data: department });
    } else {
      return res.status(400).send("invalid user credentials password");
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
};


