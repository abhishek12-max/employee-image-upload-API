const express= require("express");
const router= express.Router();
const employeeController= require("../controllers/employee.controller");
const upload= require("../middleware.js/multer.middleware");

router.post("/uploads",upload.single("profileImage"),employeeController.uploadImage);

module.exports=router;
