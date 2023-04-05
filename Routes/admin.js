const express = require("express");

const router = express.Router();

const adminController = require("../Controllers/admin");

// router.route("/").post(adminController.newAdmin);
router.route("/").post(adminController.adminLogin);

module.exports = router;
