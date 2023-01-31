//3.	Using fetch funtion call fake rest api of employee, todo and display on browser with the help of DOM concept. 
//      It may be table format or list format or any other format.
const ul=document.getElementById('data');
//const list = document.createDocumentFragment();
const url = "https://dummyjson.com/products";
function fetchProductData() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
      let ul=result.json;
      document.getElementById('data').innerHTML=JSON.stringify(ul);
    })
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