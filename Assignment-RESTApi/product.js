let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
let Products = [];
let product1 = { pid: 100, pname: "TV", price: 40000 };
Products.push(product1);
let product2 = { pid: 101, pname: "Laptop", price: 50000 };
Products.push(product2);
let product3 = { pid: 102, pname: "Computer", price: 30000 };
Products.push(product3);
let product4 = { pid: 103, pname: "Mobile", price: 26000 };
Products.push(product4);

app.get("/", (req, res) => {
  res.send("welcome to rest api with get method");
});

app.get("/getProduct", (req, res) => {
  res.json(product1);
});

app.get("/getProducts", (req, res) => {
  res.json(Products);
});

//http://localhost:3000/productByQueryParam?pid=100
app.get("/productByQueryParam", (req, res) => {
  let pid = req.query.pid;
  let result = Products.find((c) => c.pid == pid);
  if (result != undefined) {
    res.json(result);
  } else {
    res.json({ msg: "Product not present" });
  }
});

//http://localhost:3000/productByPathParam/100
app.get("/productByPathParam/:pid", (req, res) => {
  let pid = req.params.pid;
  let result = Products.find((c) => c.pid == pid);
  if (result != undefined) {
    res.json(result);
  } else {
    res.json({ msg: "Product not present" });
  }
});

app.post("/storeProduct", (req, res) => {
  let product = req.body;
  let result = Products.find((c) => c.pid == product.pid);
  if (result == undefined) {
    Products.push(product);
    res.send("Product details stored successfully!");
  } else {
    res.send("Product didn't store, Product id must be unique");
  }
});

// update
app.patch("/updateProduct", (req, res) => {
  let product = req.body;
  let index = Products.findIndex((c) => c.pid == product.pid);
  if (index < 0) {
    res.send("There is no product with this id" + product.pid);
  } else {
    Products[index].price = product.price;
    res.send("Price is updated!");
  }
});

//delete
app.delete("/deleteProduct/:pid", (req, res) => {
  let pid = req.params.pid;
  let index = Products.findIndex((c) => c.pid == pid);
  if (index < 0) {
    res.send("There is no product with this id" + pid);
  } else {
    Products.splice(index, 1);
    res.send(" Product deleted successfully!");
  }
});

app.listen(3000, () => console.log("Welcome on port number 3000!"));
