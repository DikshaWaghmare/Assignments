let mongodb=require("mongodb");
let mongoClient=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Database Connected....");
        let db= client.db("mydb");
        let student1= {_id:5, name:"Ruchika", age:17, class:12, Marks:[{Math:80},{Physics:80},{Chemistry:85}]};
        let student2= {_id:6, name:"Sashi", age:17, class:12, Marks:[{Math:65},{Physics:70},{Chemistry:65}]};
        db.collection("Student").insertMany([student1,student2],(err,result)=>{
            if(!err){
                console.log(result);
            }else{
                console.log(err);
            }client.close();
        })
    }else{
        console.log(err);
    }
})