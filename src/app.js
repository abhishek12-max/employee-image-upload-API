const express= require("express");
const employeeRoutes = require("./routes/employee.route");
const app= express();
app.use("/api", employeeRoutes);
module.exports= app;