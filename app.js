const express = require("express");
const cors = require("cors");
const app = express();

// Importing routes
const adminRoutes = require("./Routes/admin");
const departmentRoutes = require("./Routes/department");
const departmentDetailsRoutes = require("./Routes/departmentDetails");

// const dep

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.use("/admin", adminRoutes);
app.use("/departments", departmentRoutes);
app.use("/departmentsDetails", departmentDetailsRoutes);

module.exports = app;
