console.log("merhaba kodlama.io");

let dolarBugun: number = 9.3;
let dolarDun: number = 9.2;
console.log(dolarDun);

const euroDun: number = 11.2;

let konutKredileri: string[] = [
  "konut kredisi",
  "emlak kredisi",
  "özel konut kredisi",
  "kamu konut kredisi",
];

console.log(konutKredileri);

console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
