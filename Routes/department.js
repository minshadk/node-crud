const express = require("express");

const router = express.Router();

const departmentController = require("../Controllers/department");

router.route("/").get(departmentController.getAllDepartments);
router.route("/").post(departmentController.newDepartment);
router.route("/departmentLogin").post(departmentController.departmentLogin);

module.exports = router;
