const data = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", status: "delivered" },
    { id: 2, name: "Book", price: 20, category: "Stationery", status: "pending" },
    { id: 3, name: "Phone", price: 600, category: "Electronics", status: "delivered" },
    { id: 4, name: "Pen", price: 2, category: "Stationery", status: "pending" },
    { id: 5, name: "Tablet", price: 300, category: "Electronics", status: "delivered" }
  ];
  
//   Keep only the products in the Electronics category.
//   Convert the names of the filtered products to uppercase.
//   Calculate the total price of these filtered products.
//   Identify the product that costs more than $500.
//   Sort the filtered products in descending order of their prices.
//   Check if:Any product is in a pending status.

  
const data1 = data.filter(datas => datas.category == 'Electronics')
console.log(data1);
console.log(data1.map(names => names.name.toUpperCase()));
console.log(data1.reduce((acc , curr) => acc + curr.price , 0));
console.log(data.filter(datas => datas.price > 500));
console.log(data.sort((a,b) => a.price-b.price));
console.log(data.find(item => item.status == 'pending'));


  
  
  