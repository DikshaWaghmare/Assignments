//1.	Create Studnet colletion in mongo db database which cotnains _id, sname,age, class, marks as array (3 marks or 5 or 6)
//through node js we need to add student, delete student base upon _id, update student marks, retreive all student details.
let mongodb=require("mongodb"); //load the module
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017"; //default port no. for mongodb
mc.connect(url,(err,client)=>{
    if(!err){
        console.log("database connected successfully");
    }else{
        console.log("database not connect");
    }
})