const express= require("express");
const employeeRoutes = require("./routes/employee.route");
const errorMiddleware= require("./middleware.js/error.middleware");
const app= express();
app.use(express.json());
app.use("/api", employeeRoutes);
app.use(errorMiddleware);
module.exports= app;