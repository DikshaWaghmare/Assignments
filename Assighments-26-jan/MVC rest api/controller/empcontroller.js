let empCollection=require("../config/dbconfig");


//4.	Create rest api in existing project to find employee details whose age is > 21
exports.findEmpsbyAge=async(req,res)=>{
    try{
        let result=await empCollection.getCollection().find({age:{$gt:21}}).toArray();
        if(result==null){
            res.json({"msg":"Record not present with id as "+empId})
        }else {
            res.json(result);
        }
    }catch(err){
        res.json({"msg":"Error generated "+err});
    }
}

//5.	create rest api in existing project to find employee details whose salary is betweeen 20000 to 30000.
exports.findEmpsbysalary=async(req,res)=>{
    try{
        let result=await empCollection.getCollection().find({$and:[{salary:{$lt:30000}},{salary:{$gt:20000}}]}).toArray();
        if(result==null){
            res.json({"msg":"Record not present with id as "+empId})
        }else {
            res.json(result);
        }
    }catch(err){
        res.json({"msg":"Error generated "+err});
    }
}