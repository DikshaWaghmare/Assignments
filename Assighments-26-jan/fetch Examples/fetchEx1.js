// 1.	using fetch function call fake rest api of product, weather, employee etc
function fetchProductData() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((e) => console.log("Error generated" + e));
}
fetchProductData();

function fetchEmployeeData() {
  fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((e) => console.log("Error generated" + e));
}
fetchEmployeeData();
