let express= require("express");
let router=express.Router(); 
let employeeController=require("../controller/empcontroller");

//http://localhost:3000/api/employees/findEmpsbyAge
router.get("/findEmpsbyAge",employeeController.findEmpsbyAge);

//http://localhost:3000/api/employees/findEmpsbysalary
router.get("/findEmpsbysalary",employeeController.findEmpsbysalary);

module.exports=router;