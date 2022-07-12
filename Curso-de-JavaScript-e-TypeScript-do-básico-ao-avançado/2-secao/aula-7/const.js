//Não é possível criar constantes com palavras reservadas pela linguagem. Ex: Let, if, console...
//constantes precisam ter nomes significativos 
//Não pode começar o nome de uma constantes com um número 
//Não podem conter espaços, nem traços
//Utilizamos camelCase
//Case-sensitive - Letras minusculas e maiusculas fazem diferença 

const nome = 'João';
console.log(nome);

//É possível juntar duas constantes
const primeiroNumero = 5;
const segundoNumero = 6;
const conta = primeiroNumero + segundoNumero; 
const resultadoConta = conta * 2;
console.log(conta);
console.log(resultadoConta);
console.log( typeof primeiroNumero)
console.log( typeof nome)
console.log(typeof (primeiroNumero + segundoNumero));