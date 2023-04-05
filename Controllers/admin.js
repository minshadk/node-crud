const Admin = require("../Models/admin");

exports.adminLogin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ userName: req.body.userName });

    if (!admin) return res.status(400).send("Invalid user credentials");

    if (req.body.password === admin.password) {
      res.status(200).json({ status: "success", data: admin });
    } else {
      return res.status(400).send("invalid user credentials password");
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send(err);
  }
};

// exports.newAdmin = async (req, res, next) => {
//   const admin = new Admin({
//     userName: req.body.userName,
//     password: req.body.password,
//   });
//   try {
//     const addNewAdmin = await admin.save();
//     return res.status(200).json({
//       status: "success",
//       message: "new admin created",
//       data: addNewAdmin,
//     });
//   } catch (err) {
//     next(err);
//     return res.status(400).json({
//       status: "failed",
//     });
//   }
// };
