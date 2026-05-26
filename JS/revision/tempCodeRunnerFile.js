const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 500 }
];
let result = products.forEach((product)=>{
  console.log("Product: " + product.name + " - " + product.price);
});