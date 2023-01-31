// 2.	using fetch fucntion with await and asynch all fake rest api product, weather, employee etc.

async function fetchProductData() {
    try {
      var res = await fetch("https://dummyjson.com/products");
      var result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  fetchProductData();
  
  async function fetchEmployeeData() {
      try {
        var res = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
        var result = await res.json();
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchEmployeeData();