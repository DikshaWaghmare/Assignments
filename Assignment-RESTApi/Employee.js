let express=require("express");
let app=express();
let bodyParser=require("body-parser");
app.use(bodyParser.json());

let Employees=[];
let emp1 = {empid:1,name:"John",age:30,salary:30000};
Employees.push(emp1);
let emp2 = {empid:2,name:"Rocky",age:32,salary:32000};
Employees.push(emp2);
let emp3 = {empid:3,name:"Alex",age:31,salary:30000};
Employees.push(emp3);
let emp4 = {empid:4,name:"Michel",age:30,salary:31000};
Employees.push(emp4);

app.get("/",(req,res)=>{
    res.send("Its working!");
})

app.get("/getEmployee",(req,res)=>{
    res.send(emp1);
})

app.get("/getAllEmployees",(req,res)=>{
    res.send(Employees);
})

//http://localhost:3000/getEmpbyQueryParam?empid=1
app.get("/getEmpbyQueryParam",(req,res)=>{
    let empid = req.query.empid;
    let result = Employees.find(c=>c.empid==empid);
    if(result!=undefined){
        res.json(result);
    }else {
    res.json({"msg":"Employee not present"});
    }
})
// http://localhost:3000/getEmpbyPathParam/1
app.get("/getEmpByPathParam/:empid",(req,res)=> {
    let empid = req.params.empid;
      let result = Employees.find(c=>c.empid==empid);
      if(result!=undefined){
          res.json(result);
      }else {
      res.json({"msg":"Product not present"});
      }
  })

app.listen(3000,()=>console.log("Server running on port no. 3000!"))