let mongodb=require("mongodb");
let mongoClient=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("Database connected...");
        let db=client.db("mydb");
        db.collection("Student").updateOne({_id:1},{$set:{marks:[{Math:80},{Physics:75},{Chemistry:65}]}},(err,result)=>{
            if(!err){
                if(result.modifiedCount>0){
                    console.log("Record updated successfully");
                }else if(result.matchedCount>0){
                    console.log("Record present but new record same as old record")
                }
                else{
                    console.log("Record not present");
                }
                
            }else {
                console.log(err);
            }
            client.close();
        })
    }else{
        console.log(err);
    }
})