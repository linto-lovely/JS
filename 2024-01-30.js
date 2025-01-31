let products = [
    {pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
    {pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
    {pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
    {pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
    {pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];
// 1.List the names of all products.
console.log(products.map(product => product.pName));

// 2.Display all products with an lcd display.
console.log(products.filter(products => products.display == 'lcd').map(product => product.pName));

// 3.List the names of all products that support the 5g band.
console.log(products.filter(product => product.band === '5g').map(product => product.pName));

// 4.Filter out and display all products with a price below 50,000
console.log(products.filter(product => product.price < 50000).map(product => product.pName));

// 5.Find and display the product with the highest price.
console.log(products.reduce((max, product) => product.price > max.price ? product : max));

// 6.Find and display the product with the lowest price.
console.log(products.reduce((min, product) => product.price < min.price ? product : min));
