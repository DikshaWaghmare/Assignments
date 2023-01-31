let mongodb=require("mongodb");
let mc=mongodb.MongoClient;
let url="mongodb://127.0.0.1:27017";
mc.connect(url,(err,client)=>{
    if(!err){
        console.log("database connect successfully!");
        let db=client.db("mydb");
        let cursor=db.collection("Student").find();
        cursor.forEach(doc=>{
            console.log(doc._id,doc.name+" class-"+doc.class);
        }).finally(()=>{
            client.close();
        })
    }else{
        console.log(err);
    }
})