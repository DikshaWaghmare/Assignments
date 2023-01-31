let express = require("express");
let app = express();
let bodyParser=require("body-parser");

app.use(bodyParser.json());
let Accounts =[];
let Acc1 = {accNo:100,accHolderName:"Jethalal Gada",Amount:540000,lastWithdraw:50000};
Accounts.push(Acc1);
let Acc2 = {accNo:101,accHolderName:"Dayaben Gada",Amount:500000,lastWithdraw:5000};
Accounts.push(Acc2);
let Acc3 = {accNo:102,accHolderName:"Champaklal Gada",Amount:580000,lastWithdraw:8000};
Accounts.push(Acc3);
let Acc4 = {accNo:103,accHolderName:"Tipendra Gada",Amount:40000,lastWithdraw:10000};
Accounts.push(Acc4);

app.get("/",(req,res)=> {
    res.send("welcome to rest api with get method");
})


app.get("/getAccount",(req,res)=> {
    res.json(Acc1);
})


app.get("/getAccounts",(req,res)=> {
    res.json(Accounts);
})

//http://localhost:3000/getAccountByQueryParam?accNo=100
app.get("/getAccountByQueryParam",(req,res)=> {
  let accNo = req.query.accNo;
    let result = Accounts.find(c=>c.accNo==accNo);
    if(result!=undefined){
        res.json(result);
    }else {
    res.json({"msg":"Product not present"});
    }
})

//http://localhost:3000/getAccoutByPathParam/100
app.get("/getAccoutByPathParam/:accNo",(req,res)=> {
    let accNo = req.params.accNo;
      let result = Accounts.find(c=>c.accNo==accNo);
      if(result!=undefined){
          res.json(result);
      }else {
      res.json({"msg":"Product not present"});
      }
  })


app.listen(3000,()=>console.log("Welcome on port number 3000!"))