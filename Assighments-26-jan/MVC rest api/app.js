let express = require("express");
let dbInfo = require("./config/dbconfig");
let emprouter= require("./router/emprouter");
let app = express();

dbInfo.dbconnect();

app.use(express.json());
// extract json data from request body;
app.get("/", (req, res) => {
  res.send("Its working!");
});

app.use("/api/employees",emprouter);

app.listen(3000, () => console.log("Server running on port no. 3000"));
