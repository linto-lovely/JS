const sales_data = [
    [1, "North Zone", 50000, 3000],
    [2, "South Zone", 35000, 5000],
    [3, "East Zone", 60000, 7000],
    [4, "West Zone", 45000, 6000],
  ];
  

//   1).Find the zone with the highest sales (Third column)
const data1 = sales_data.map(sales => sales[2])
const maxSales = data1.sort((a, b) => b - a)[0];
console.log(maxSales);

//   2).List zones with sales above 40,000 (Third column)
//console.log(sales_data.filter(sales => sales[2] > 40000).map(item => item[1])); 

//   3).Sort zones by returns in ascending order.(fourth column)
console.log(sales_data.sort((a, b) => a[3] - b[3]));

//   4).Write JavaScript code to extract and list only the names of the zones from the sales_data array.
console.log(sales_data.map(item => item[1]));

//   5).Calculate the average returns across all zones.
const totalReturns = sales_data.reduce((acc, item) => acc + item[3], 0);
const averageReturns = totalReturns / sales_data.length;
console.log(`Average Returns: ${averageReturns}`);