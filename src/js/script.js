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

console.log("===== Questão 5 =====");

let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234"){
    console.log("Login realizado com sucesso!");
}else{
    console.log("Falha na autentição!")
}

console.log("===== Questão 6 =====");

let nota1 = 3;
let nota2 = 2; 
let nota3 = 1; 
let nota4 = 2; 
let nota5 = 4; 
let nota6 = 3;
let nota7 = 2; 

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

console.log("Média:", media.toFixed(2));

if (media >= 6){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado!");
}

console.log("===== Questão 7 =====");

let nome = "Eduardo";
let idade = "21";
let curso = "Engenharia de Software";
let ano = "2025";

let saida = document.getElementById("saida");

saida.innerHTML = `
Nome: ${nome} <br>
Idade: ${idade} <br>
Curso: ${curso} <br>
Ano: ${ano}
`;

console.log("===== Questão 8 =====");
let  texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

let posicaoEm = texto.indexOf("em");
console.log("1- Primeira posicao de 'em':", posicaoEm);

let posicaoFinal = texto.lastIndexOf("ia");
console.log("2- Ultima posicao de 'ia':", posicaoFinal)

let palavraCiencia = texto.includes("ciência");
console.log("3- A palavra 'ciencia' está no texto?", palavraCiencia)

let palavraMetodos = texto.includes("métodos");
console.log("4 - A palavra 'métodos' está no texto?", palavraMetodos);










































