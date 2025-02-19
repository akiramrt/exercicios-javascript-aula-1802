//Exercício 1: Arrow Function com um parâmetro
//Crie uma arrow function chamada dobro que recebe um número e retorna o dobro dele.
const double = (a) => a * 2;
console.log("Exercício 1: " + double(10));

//Exercício 2: Arrow Function com múltiplos parâmetros
//Crie uma arrow function chamada dividir que recebe dois números e retorna o resultado da divisão do primeiro pelo segundo.
const half = (a, b) => a / b;
console.log("Exercício 2: " + falf(10, 2));

//Exercício 3: Arrow Function com múltiplas linhas
//Crie uma arrow function chamada mensagemBoasVindas que recebe um nome e retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!".
const mensagemBoasVindas = (nome) => "Seja bem-vindo, " + nome + "!";
console.log("Exercício 3: " + mensagemBoasVindas("edu"));

//Exercício 4: Higher-Order Function personalizada
//Crie uma função chamada executarOperacao que recebe três parâmetros: dois números e uma função que representa uma operação matemática (adição, subtração, multiplicação ou divisão).
//Em seguida, chame essa função passando diferentes operações matemáticas como arrow functions.
function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2)
}

function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return x / y;
}

console.log("Exercício 4 -> Soma: " + executarOperacao(5, 3, somar));
console.log("Exercício 4 -> Subtração: " + executarOperacao(5, 3, subtrair));
console.log("Exercício 4 -> Multiplicação: " + executarOperacao(5, 3, multiplicar));
console.log("Exercício 4 -> Divisão: " + executarOperacao(5, 3, dividir));


//Exercício 5: map() – Transformação de um array
//Crie um array de preços de produtos e use o método map() para aplicar um desconto de 10% em cada preço.
const precos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const desconto = precos.map(num => num * 0.9);

console.log("Exercício 5: " + desconto);

//Exercício 6: filter() – Filtrando valores em um array
//Crie um array com idades e use o método filter() para retornar apenas as idades menores que 18 anos.
const idades = [10, 12, 14, 15, 16, 20, 22];
const maioresDeIdade = idades.filter(idade => idade >= 18);

console.log("Exercício 6: " + maioresDeIdade);

//Exercício 7: reduce() – Somando valores de um array
//Crie um array com números e use o método reduce() para calcular o produto (multiplicação de todos os números).

const numbers = [10, 15, 20, 25, 30, 35, 40];
const soma = numbers.reduce((total, num) => total + num, 0);

console.log("Exercício 7: " + soma);