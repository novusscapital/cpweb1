console.log("===== Questão 1 =====");
let a;
console.log(a)

let b = "";
console.log(b);

let c = "Novus vinheria";
console.log(c);

console.log("===== Questão 2 =====");

let x = 10;
let y = 5;

console.log("x != y:", x != y)

console.log("x == 10:", x == 10);

console.log("x >= y:", x >= y);
console.log("y >= x:", y >= x);

console.log("===== Questão 3 =====");

let peso = 76;
let altura = 1.91;

let imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));

let classificacao = 
    imc < 18.5 ? "abaixo":
    imc <= 24.9 ? "ideal":
    "acima";

switch (classificacao){
    case "abaixo":
        console.log("Você está abaixo do peso.");
        break;
    case "ideal":
        console.log("Você está no peso ideal.");
        break;
    case "acima":
        console.log("Você está acima do peso.")
        break;    
}

console.log("===== Questão 4 =====");

for (let p = 1; p <= 50; p++){
    console.log("O valor é:", p);
}






















