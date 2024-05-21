"use strict";
function addToCart(quantity, productName = "Elma") {
    console.log("sepete eklendi", "ürün:", productName, "adet:", quantity);
}
addToCart(5);
addToCart(10, "Yumurta");
addToCart(1, "Karpuz");
const sayHello = () => {
    console.log("hello world!");
};
sayHello();
const sayHello2 = function () {
    console.log("hello world2!");
};
sayHello2();
function addToCart2(productName, quantity, unitPrice) { }
addToCart2("Elma", 10, 5);
addToCart2("Armut", 2, 5);
addToCart2("Limon", 3, 5);
function addToCart3(product) {
    console.log("sepete eklendi!", "ürün:", product.productName, "adet:", product.quantity, "fiyat:", product.unitPrice);
}
let product1 = { productName: "Elma", quantity: 50, unitPrice: 5 };
addToCart3(product1);
function addToCart4(products) {
    console.log(products);
}
const products = [
    { productName: "Elma", quantity: 50, unitPrice: 5 },
    { productName: "Karpuz", quantity: 40, unitPrice: 10 },
    { productName: "Limon", quantity: 30, unitPrice: 15 },
];
addToCart4(products);
function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    console.log(total);
}
add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);
let numbers = [30, 10, 500, 600, 120];
console.log(Math.max(...numbers));
const [icAnadolu, marmara, karadeniz] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
];
console.log(icAnadolu);
console.log(marmara);
console.log(karadeniz);
let productName, quantity, unitPrice;
({ productName, quantity, unitPrice } = { productName: "Elma", quantity: 50, unitPrice: 5 });
console.log(productName);
console.log(quantity);
console.log(unitPrice);
