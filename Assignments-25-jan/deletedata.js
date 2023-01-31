let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url, (err, client) => {
    if(!err){
  console.log("Database Connected...");
  let db = client.db("mydb");

  db.collection("Student").deleteOne({_id:6},(err1, result) => {
    if (!err1) {
      if (result.deletedCount > 0) {
        console.log("Record deleted successfully");
      } else {
        console.log("Record not present");
      }
    } else {
      console.log(err1);
    }
    client.close();
  });
}else{
    console.log(err);
}
});
