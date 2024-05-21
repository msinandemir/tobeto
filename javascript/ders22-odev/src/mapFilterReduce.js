"use strict";
const cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 8000 },
    { id: 3, productName: "Kalem", quantity: 1, unitPrice: 70000 },
    { id: 4, productName: "Şarj cihazı", quantity: 4, unitPrice: 60000 },
    { id: 5, productName: "Kitap", quantity: 5, unitPrice: 50000 },
    { id: 6, productName: "Pot", quantity: 6, unitPrice: 40000 },
];
console.log("<ul>");
cart.map((product) => console.log(product.productName));
console.log("</ul>");
let total = cart.reduce((acc, product) => acc + product.unitPrice, 0);
console.log(total, "total");
let quantityOver2 = cart.filter((product) => product.quantity > 2);
console.log(quantityOver2);
function addToCart5(cart) {
    cart.push({ id: 7, productName: "Fare", quantity: 7, unitPrice: 2700 });
}
addToCart5(cart);
console.log(cart);
let number = 10;
function sayiTopla(number) {
    number += 1;
}
sayiTopla(number);
console.log(number);
