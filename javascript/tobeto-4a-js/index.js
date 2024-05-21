console.log("Hello world");

//#region Değişkenler
// değişkenler

const a = 10;
const b = 3.14;

console.log(typeof a);
console.log(typeof b);

// String

const name = "Sinan";
console.log(typeof name);

// boolean

const c = true;
console.log(typeof c);

//null

let d = null;
console.log(typeof d, d);

// undefined herhangi bir değer geçilmediğini belirtir
let e;
console.log(typeof e, e);

// array
const arr = [1, "Sinan", true, {}, undefined];
const array2 = new Array(1, 2, 3, 4, 5);
console.log(typeof arr, arr);

// object
const obj = {
  name: "sinan",
  surname: "demir",
  age: 26,
  isStudent: true,
  adress: {
    city: "istanbul",
    district: "Çekmeköy",
  },
  getFullName: () => {
    return obj.name + " " + obj.surname;
  },
};

console.log(typeof obj, obj);

// function

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

// date

const date = new Date();
console.log(typeof date, date);

// regExp
const regExpString = "abc";
const regExp = /abc/;
console.log(typeof regExp, regExp.test(regExpString));

//#endregion

//#region Operatörler

console.log('"3" == 3', "3" == 3);
console.log('"3" === 3', "3" === 3);

// + toplama
// - çıkartma
// * çarpma
// / bölme
// % mod alma
// ++ bir artırma
// -- bir eksiltme
// ** üs alma
// += topla ata
// -= çıkart ata
// *= çarp ata
// /= böl ata
// %= mod al ata
// **= üs al ata

// karşılaştırma operatörleri

// == / === eşit mi
// != / !== eşit değil mi
// > büyüktür
// < küçüktür
// >= büyük eşit
// <= küçük eşit
// && veya
// || ya da
// ! değil

//#endregion

//#region Döngüler

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

do {
  console.log(j);
} while (j < 10);

for (let key in obj) {
  console.log(key, obj[key]);
}

for (let index in obj) {
  console.log(index, obj[index]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach((m) => console.log(m));

//#endregion

//#region destructuring
const { name: firstname, surname } = obj;
console.log(firstname, surname);

const [first, second, ...rest] = arr;
console.log(first, second, rest);
console.log(...arr);

const arr2 = [...arr, "yeni eleman"];
console.log("spread:", arr2);

const obj2 = { ...obj, age: 27, identity: "12345678901" };

//#endregion
