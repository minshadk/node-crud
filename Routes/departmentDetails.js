const express = require("express");

const router = express.Router();

const departmentDetailsController = require("../Controllers/departmentDetails");


router.route("/").post(departmentDetailsController.newDepartmentDetails);
router.route("/:departmentId").get(departmentDetailsController.getDepartmentById);

// router.route("/").get(departmentDetailsController.getAllDepartments);

module.exports = router;
