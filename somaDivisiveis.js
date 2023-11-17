function somaDivisiveis(numero) {
let soma = 0;

for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
    }
}

return soma;
}

// Breve demonstração da função sendo chamada e retornando o valor
const resultado1 = somaDivisiveis(10);
console.log(resultado);
const resultado2 = somaDivisiveis(11);
console.log(resultado2);